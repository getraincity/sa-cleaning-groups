// Every page × every width: horizontal overflow, text spilling out of its box,
// tap targets under 32px on touch widths, and console errors.
// Usage: node scripts/qa/sweep.mjs            (pages come from /sitemap.xml)
import { BASE, isRealError, launch } from "./browser.mjs";

const widths = [360, 414, 768, 1024, 1280, 1440, 1920];
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (!pages.includes("/book-home-cleaning")) pages.push("/book-home-cleaning");

const browser = await launch();
const problems = [];
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && isRealError(m.text()) && errors.push(m.text()));
  for (const p of pages) {
    errors.length = 0;
    await page.goto(BASE + p, { waitUntil: "load" });
    await page.waitForTimeout(300);
    const r = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const overflow = document.documentElement.scrollWidth - vw;
      const spills = [];
      for (const el of document.querySelectorAll("h1,h2,h3,p,a,button,span,li")) {
        if (!el.offsetParent || el.closest("[aria-hidden],.sr-only,svg")) continue;
        if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflow !== "visible")
          spills.push(el.tagName + ":" + el.textContent.trim().slice(0, 40));
        const rect = el.getBoundingClientRect();
        if (rect.right > vw + 1 || rect.left < -1) {
          let clipped = false;
          for (let q = el.parentElement; q; q = q.parentElement) {
            const o = getComputedStyle(q).overflowX;
            if (o === "hidden" || o === "clip") {
              clipped = true;
              break;
            }
          }
          if (!clipped) spills.push("OUT " + el.tagName + ":" + el.textContent.trim().slice(0, 40));
        }
      }
      const small =
        vw < 768
          ? [...document.querySelectorAll("main a, main button")]
              .filter((el) => {
                const b = el.getBoundingClientRect();
                return (
                  el.offsetParent &&
                  b.height > 0 &&
                  b.height < 32 &&
                  !el.closest("nav[aria-label=Breadcrumb]") &&
                  el.textContent.trim() &&
                  el.textContent.trim() !== "Get in touch"
                );
              })
              .map((el) => el.textContent.trim().slice(0, 30))
          : [];
      return {
        overflow,
        spills: [...new Set(spills)].slice(0, 5),
        small: [...new Set(small)].slice(0, 6),
      };
    });
    if (r.overflow > 0 || r.spills.length || errors.length || r.small.length)
      problems.push({ w, p, ...r, errors: [...errors] });
  }
  await ctx.close();
}
await browser.close();
console.log(`${pages.length} pages × ${widths.length} widths`);
console.log(problems.length ? JSON.stringify(problems, null, 1) : "no problems");
