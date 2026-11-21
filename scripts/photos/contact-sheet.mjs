// Contact sheets: labelled thumbnails of every image in a folder, so you can look at
// candidates (and the photos already on the site) before picking.
//
//   node scripts/photos/contact-sheet.mjs <image-dir> <out-dir> [cols=8] [perSheet=48] [thumb=220]
//
// Writes <out-dir>/sheet-00.jpg, sheet-01.jpg, … Open each with the Read tool.
// Compare candidates against src/assets/images/jobs/ by eye: sources re-upload the same photo
// under different file names (see docs/HANDOFF.md, "No stock photos left").
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [dir, out] = process.argv.slice(2);
if (!dir || !out) {
  console.error("usage: contact-sheet.mjs <image-dir> <out-dir> [cols] [perSheet] [thumb]");
  process.exit(1);
}
const [cols, per, T] = [8, 48, 220].map((d, i) => Number(process.argv[4 + i] ?? d));
const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpe?g|webp|png)$/i.test(f))
  .sort();
fs.mkdirSync(out, { recursive: true });
const H = T + 18;
for (let s = 0; s * per < files.length; s++) {
  const chunk = files.slice(s * per, (s + 1) * per);
  const rows = Math.ceil(chunk.length / cols);
  const comps = [];
  for (const [i, f] of chunk.entries()) {
    try {
      const buf = await sharp(path.join(dir, f))
        .resize(T, T, { fit: "contain", background: "#fff" })
        .jpeg()
        .toBuffer();
      const x = (i % cols) * (T + 4);
      const y = Math.floor(i / cols) * (H + 4);
      const label = f.replace(/\.\w+$/, "").replace(/[<&>]/g, "");
      comps.push({ input: buf, left: x, top: y });
      comps.push({
        input: Buffer.from(
          `<svg width="${T}" height="18"><rect width="100%" height="100%" fill="#000"/><text x="4" y="14" font-size="14" fill="#ff0" font-family="sans-serif">${label}</text></svg>`,
        ),
        left: x,
        top: y + T,
      });
    } catch {
      console.warn("skipped", f);
    }
  }
  const file = path.join(out, `sheet-${String(s).padStart(2, "0")}.jpg`);
  await sharp({
    create: { width: cols * (T + 4), height: rows * (H + 4), channels: 3, background: "#888" },
  })
    .composite(comps)
    .jpeg({ quality: 75 })
    .toFile(file);
  console.log(file);
}
console.log(`${files.length} images`);
