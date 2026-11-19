// Shrinks the site's local photos (everything in src/assets/images except jobs/, which
// build-job-photos.mjs makes at its final size) so they can be served as-is.
// The site no longer uses Vercel's image optimizer (see next.config.ts), so the browser gets
// exactly these files: cap the long side and re-encode, writing back to the same path so no
// import changes. A file is only rewritten when that saves at least 10%, so running the script
// again leaves already-compressed files alone.
// Usage: node scripts/photos/compress-images.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const sharp = createRequire(import.meta.url)(path.join(root, "node_modules/sharp"));
const dir = path.join(root, "src/assets/images");
const dry = process.argv.includes("--dry");

// Full-width page heroes keep more pixels (and sit under a dark overlay, so take a lower
// quality); everything else is a card, tile or half-width image.
const HERO = new Set(["cleaning-windows.jpg"]);
const HERO_LONG_SIDE = 2400;
const LONG_SIDE = 1600;

const files = fs
  .readdirSync(dir, { recursive: true })
  .map(String)
  .filter((f) => /\.(jpe?g|webp)$/i.test(f) && !f.startsWith(`jobs${path.sep}`));

let before = 0;
let after = 0;
for (const rel of files) {
  const file = path.join(dir, rel);
  const input = fs.readFileSync(file);
  const meta = await sharp(input).metadata();
  const max = HERO.has(rel) ? HERO_LONG_SIDE : LONG_SIDE;
  let pipeline = sharp(input).rotate();
  if (Math.max(meta.width, meta.height) > max)
    pipeline = pipeline.resize(max, max, { fit: "inside" });
  pipeline =
    meta.format === "webp"
      ? pipeline.webp({ quality: 80 })
      : pipeline.jpeg({ quality: HERO.has(rel) ? 72 : 80, mozjpeg: true, progressive: true });
  const output = await pipeline.toBuffer({ resolveWithObject: true });
  before += input.length;
  if (output.data.length > input.length * 0.9) {
    after += input.length;
    continue;
  }
  after += output.data.length;
  console.log(
    `${rel}  ${meta.width}x${meta.height} → ${output.info.width}x${output.info.height}  ` +
      `${Math.round(input.length / 1024)} → ${Math.round(output.data.length / 1024)} KB`,
  );
  if (!dry) fs.writeFileSync(file, output.data);
}
console.log(`${files.length} files: ${Math.round(before / 1024)} → ${Math.round(after / 1024)} KB`);
