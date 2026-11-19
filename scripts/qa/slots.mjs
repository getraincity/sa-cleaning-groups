// Every photo slot on every page: page | section | file | alt. Prints TSV.
// Usage: node scripts/qa/slots.mjs
import { BASE, launch, revealAll } from "./browser.mjs";
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const extra = (process.env.EXTRA_PAGES || "").split(",").filter(Boolean);
const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const p of [...pages, ...extra]) {
  await page.goto(BASE + p, { waitUntil: "load" });
  await revealAll(page);
  const rows = await page.$$eval("main img", (imgs) =>
    imgs.map((img) => {
      const sec = img.closest("section, header, [data-section]") || document.body;
      const h = sec.querySelector("h1, h2");
      const src = img.currentSrc || img.src;
      const u = new URL(src, location.href);
      const inner = decodeURIComponent(u.searchParams.get("url") ?? u.pathname);
      return [
        (h?.textContent || "(no heading)").trim().slice(0, 50),
        inner,
        img.alt,
        img.naturalWidth,
      ];
    }),
  );
  for (const [sec, inner, alt] of rows) {
    if (/logo|icon|partners\/|\.svg/i.test(inner)) continue;
    let key = inner;
    const un = inner.match(/(photo-[0-9a-f]+-[0-9a-f]+)/);
    const px = inner.match(/pexels\.com\/photos\/(\d+)/);
    if (un) key = "unsplash:" + un[1];
    else if (px) key = "pexels:" + px[1];
    else
      key = inner
        .split("/")
        .pop()
        .replace(/\.[\w-]{8,}(?=\.\w+$)/, "");
    console.log([p, sec, key, alt].join("\t"));
  }
}
await browser.close();
