// Contact sheet of every photo in src/assets/images, labelled with its path,
// to choose images without repeating the same shot across pages.
// Usage: node scripts/qa/photos.mjs <out.jpg>
import fs from "node:fs";
import path from "node:path";
import { sharp } from "./browser.mjs";

const root = path.resolve(import.meta.dirname, "../../src/assets/images");
const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(jpe?g|webp|png)$/.test(entry.name) && !/checklist|logo|icons/.test(file))
      files.push(path.relative(root, file));
  }
})(root);

const W = 300,
  H = 220,
  cols = 6;
const tiles = [];
for (const [i, f] of files.entries()) {
  const x = (i % cols) * W,
    y = Math.floor(i / cols) * H;
  const img = await sharp(path.join(root, f))
    .resize(W, H - 30, { fit: "cover" })
    .toBuffer();
  const label = Buffer.from(
    `<svg width="${W}" height="30"><rect width="100%" height="100%" fill="white"/><text x="4" y="20" font-size="13" font-family="sans-serif">${f}</text></svg>`,
  );
  tiles.push({ input: img, left: x, top: y }, { input: label, left: x, top: y + H - 30 });
}
await sharp({
  create: {
    width: W * cols,
    height: H * Math.ceil(files.length / cols),
    channels: 3,
    background: "#fff",
  },
})
  .composite(tiles)
  .jpeg()
  .toFile(process.argv[2]);
console.log(`${files.length} photos`);
