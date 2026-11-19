// Checks that every photo on every sitemap page actually loads, and prints the ones that don't
// with the HTTP status the server gave. Run it against the live site after each deploy:
// on 2026-11-19 most photos on sacleaninggroup.ca were blank because Vercel's image optimizer
// answered 402 (quota used up), which no local build can show.
// Usage: BASE_URL=https://sacleaninggroup.ca node scripts/qa/images.mjs
// (in the cloud sandbox add NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt)
import { BASE, launch, revealAll } from "./browser.mjs";

const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const pages = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const status = new Map();
page.on("response", (res) => {
  if (res.request().resourceType() === "image") status.set(res.url(), res.status());
});

let total = 0;
let broken = 0;
for (const pathname of pages) {
  await page.goto(BASE + pathname, { waitUntil: "load" });
  await revealAll(page);
  // Lazy images start loading once scrolled into view; give the slow ones time to finish.
  await page.waitForTimeout(1500);
  const images = await page.evaluate(() =>
    [...document.querySelectorAll("img")]
      .map((img) => ({ src: img.currentSrc || img.src, ok: img.complete && img.naturalWidth > 0 }))
      // The Google Reviews widget's avatars are third-party and not ours to fix.
      .filter((img) => img.src && !/elfsight|googleusercontent/.test(img.src)),
  );
  const bad = images.filter((img) => !img.ok);
  total += images.length;
  broken += bad.length;
  console.log(`${pathname.padEnd(52)} ${images.length - bad.length}/${images.length} loaded`);
  for (const img of bad) console.log(`   ✗ ${status.get(img.src) ?? "no response"}  ${img.src}`);
}
await browser.close();
console.log(
  broken ? `\n${broken} of ${total} images failed to load.` : `\nAll ${total} images load.`,
);
process.exitCode = broken ? 1 : 0;
