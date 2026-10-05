// Full-page screenshot cut into side-by-side strips, small enough to read in one image.
// Usage: node scripts/qa/sheet.mjs <path> <width> <outPrefix>
//   e.g. node scripts/qa/sheet.mjs /about-us 390 /tmp/about-mobile  → about-mobile-0.png, -1.png …
import { BASE, isRealError, launch, revealAll, sharp } from "./browser.mjs";

const [, , path, width, out] = process.argv;
const w = +width;
const browser = await launch();
const page = await browser.newPage({ viewport: { width: w, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => m.type() === "error" && isRealError(m.text()) && errors.push(m.text()));
const res = await page.goto(BASE + path, { waitUntil: "load" });
await page.waitForTimeout(800);
await revealAll(page);
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
const buf = await page.screenshot({ fullPage: true });
await browser.close();

const meta = await sharp(buf).metadata();
const stripH = w > 1000 ? 1800 : w > 600 ? 2600 : 2400;
const perSheet = w > 1000 ? 2 : w > 600 ? 3 : 4;
const n = Math.ceil(meta.height / stripH);
const strips = [];
for (let i = 0; i < n; i++)
  strips.push(
    await sharp(buf)
      .extract({
        left: 0,
        top: i * stripH,
        width: w,
        height: Math.min(stripH, meta.height - i * stripH),
      })
      .toBuffer(),
  );
let sheets = 0;
for (let s = 0; s < n; s += perSheet) {
  const part = strips.slice(s, s + perSheet);
  const composed = await sharp({
    create: { width: (w + 20) * part.length, height: stripH, channels: 3, background: "#777" },
  })
    .composite(part.map((b, i) => ({ input: b, left: i * (w + 20), top: 0 })))
    .png()
    .toBuffer();
  await sharp(composed).resize({ height: 1900 }).toFile(`${out}-${sheets++}.png`);
}
console.log(
  JSON.stringify({ path, w, status: res.status(), height: meta.height, overflow, sheets, errors }),
);
