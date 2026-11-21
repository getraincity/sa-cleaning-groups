// Flags candidate photos that look like a photo already used (a perceptual difference hash of
// the centre of each image, so frames, labels and corner logos matter less).
//
//   node scripts/photos/find-dupes.mjs <candidate-dir> [used-dir=assets-incoming/raw] [threshold=60]
//
// Prints candidate, distance (0–256, lower = more alike) and the closest used file. It catches
// straight re-uploads but MISSES framed and before/after composites, so still compare by eye
// with contact-sheet.mjs.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [candDir, usedDir = "assets-incoming/raw", thr = "60"] = process.argv.slice(2);
if (!candDir) {
  console.error("usage: find-dupes.mjs <candidate-dir> [used-dir] [threshold]");
  process.exit(1);
}
const images = (d) => fs.readdirSync(d).filter((f) => /\.(jpe?g|webp|png)$/i.test(f));

async function hash(file) {
  const { width: w, height: h } = await sharp(file).metadata();
  const buf = await sharp(file)
    .extract({
      left: Math.round(w * 0.15),
      top: Math.round(h * 0.15),
      width: Math.round(w * 0.7),
      height: Math.round(h * 0.7),
    })
    .greyscale()
    .resize(17, 16, { fit: "fill" })
    .raw()
    .toBuffer();
  let bits = "";
  for (let y = 0; y < 16; y++)
    for (let x = 0; x < 16; x++) bits += buf[y * 17 + x] > buf[y * 17 + x + 1] ? "1" : "0";
  return bits;
}
const dist = (a, b) => [...a].reduce((d, c, i) => d + (c !== b[i]), 0);

const used = [];
for (const f of images(usedDir)) {
  try {
    used.push([f, await hash(path.join(usedDir, f))]);
  } catch {}
}
let flagged = 0;
for (const f of images(candDir).sort()) {
  let h;
  try {
    h = await hash(path.join(candDir, f));
  } catch {
    continue;
  }
  let best = [999, ""];
  for (const [k, v] of used) {
    const d = dist(h, v);
    if (d < best[0]) best = [d, k];
  }
  if (best[0] < Number(thr)) {
    flagged++;
    console.log(`${f}\t${best[0]}\t${best[1]}`);
  }
}
console.log(`${flagged} likely duplicates (distance < ${thr})`);
