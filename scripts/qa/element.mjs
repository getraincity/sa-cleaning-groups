// Screenshot one element at full resolution, for close-up review.
// Usage: node scripts/qa/element.mjs <path> <width> "<css selector>" <out.png> [nth]
//   e.g. node scripts/qa/element.mjs / 1440 "section:has(h2:text('Give the Gift'))" /tmp/gift.png
import { BASE, launch, revealAll } from "./browser.mjs";

const [, , path, width, selector, out, nth = "0"] = process.argv;
const browser = await launch();
const page = await browser.newPage({ viewport: { width: +width, height: 900 } });
await page.goto(BASE + path, { waitUntil: "load" });
await revealAll(page);
const el = page.locator(selector).nth(+nth);
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await el.screenshot({ path: out });
await browser.close();
