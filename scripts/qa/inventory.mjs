// Which photo appears on which page, and any photo that appears on more than one.
// Unsplash photos are keyed by their photo ID, local images by their file name.
// Logos, icons and partner logos are left out. Photo Credits shows every photo, and a
// post's photo also appears on its blog cards, so those count as one "page" each.
// Usage: node scripts/qa/inventory.mjs            (pages come from /sitemap.xml)
import { BASE, launch, revealAll } from "./browser.mjs";

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

function photoKey(src) {
  const url = new URL(src, BASE);
  const inner = url.searchParams.get("url") ?? url.pathname; // unwrap /_next/image
  const unsplash = inner.match(/(photo-[0-9a-f]+-[0-9a-f]+)/);
  if (unsplash) return unsplash[1];
  const file = decodeURIComponent(inner).split("/").pop().split("?")[0];
  if (/logo|icon|partners|\.svg$/i.test(inner)) return null;
  return file.replace(/\.[\w-]{8,}(?=\.\w+$)/, ""); // drop the build hash
}

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const seen = new Map(); // photo -> Set of pages
for (const p of pages) {
  await page.goto(BASE + p, { waitUntil: "load" });
  await revealAll(page);
  const srcs = await page.$$eval("img", (imgs) => imgs.map((img) => img.currentSrc || img.src));
  const photos = [...new Set(srcs.map(photoKey).filter(Boolean))];
  console.log(`${p}  (${photos.length})`);
  for (const photo of photos) {
    console.log(`  ${photo}`);
    if (p === "/photo-credits") continue;
    const group = p.startsWith("/blog") ? "/blog" : p;
    if (!seen.has(photo)) seen.set(photo, new Set());
    seen.get(photo).add(group);
  }
}
await browser.close();

const repeats = [...seen].filter(([, where]) => where.size > 1);
console.log(
  repeats.length
    ? `\nOn more than one page:\n${repeats.map(([photo, where]) => `  ${photo}: ${[...where].join(", ")}`).join("\n")}`
    : "\nNo photo appears on more than one page.",
);
