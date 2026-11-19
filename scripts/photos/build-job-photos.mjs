// Builds the site's real job photos from the raw downloads.
// For each slot in job-photos.json: cut away the source's white frame, BEFORE/AFTER labels
// and corner logo, crop to the slot's ratio, apply one shared light grade, export WebP to
// src/assets/images/jobs/<slot>.webp.
// Usage: node scripts/photos/build-job-photos.mjs [slot ...]
// Raw files live in assets-incoming/raw/ (not committed; see assets-incoming/SOURCES.md).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const sharp = createRequire(import.meta.url)(path.join(root, "node_modules/sharp"));
const { slots } = JSON.parse(fs.readFileSync(path.join(root, "scripts/photos/job-photos.json")));
const rawDir = path.join(root, "assets-incoming/raw");
const outDir = path.join(root, "src/assets/images/jobs");
fs.mkdirSync(outDir, { recursive: true });

const only = process.argv.slice(2);

/** Decoded, upright pixels of a raw file. */
async function load(file) {
  const { data, info } = await sharp(path.join(rawDir, file))
    .rotate()
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height };
}

const toSharp = (img, box) =>
  sharp(img.data, { raw: { width: img.w, height: img.h, channels: 3 } }).extract({
    left: Math.round(box[0]),
    top: Math.round(box[1]),
    width: Math.round(box[2]),
    height: Math.round(box[3]),
  });

/** The white band between the BEFORE (top) and AFTER (bottom) photos. */
function findSeparator(img) {
  const rowWhite = (y) => {
    let sum = 0;
    for (let x = Math.round(img.w * 0.1); x < img.w * 0.9; x += 4) {
      const i = (y * img.w + x) * 3;
      sum += (img.data[i] + img.data[i + 1] + img.data[i + 2]) / 3;
    }
    return sum / Math.ceil((img.w * 0.8) / 4) > 240;
  };
  const mid = Math.round(img.h / 2);
  for (let d = 0; d < img.h * 0.1; d++) {
    for (const y of [mid - d, mid + d]) {
      if (!rowWhite(y)) continue;
      let a = y;
      let b = y;
      while (a > 0 && rowWhite(a - 1)) a--;
      while (b < img.h - 1 && rowWhite(b + 1)) b++;
      return [a, b];
    }
  }
  throw new Error("no separator found");
}

/** Crop boxes [left, top, width, height] with the frame, labels and logo cut away. */
function regions(img, mode) {
  const { w, h } = img;
  const border = Math.round(w * 0.012);
  const side = Math.round(w * 0.16); // BEFORE/AFTER labels and the logo sit in this strip
  if (mode === "framed") {
    // Single framed photo: logo in the bottom-right corner, so drop the bottom strip.
    const logo = Math.round(h * 0.125);
    return [[border, border, w - 2 * border, h - 2 * border - logo]];
  }
  const [s0, s1] = findSeparator(img);
  // BEFORE labels sit along the bottom of the top photo and AFTER labels along the top of the
  // bottom photo (left or right), so drop that band; the logo is bottom-right of the bottom one.
  const half = s0 - border;
  const band = Math.round(half * 0.13);
  const before = [border, border, w - 2 * border, half - band];
  const after = [border, s1 + 1 + band, w - 2 * border - side, h - border - s1 - 1 - band];
  if (mode === "after") return [after];
  if (mode === "before") return [before];
  return [before, after];
}

/** One light grade for every photo: a touch warmer, brighter and crisper. */
const grade = (pipeline) =>
  pipeline
    .recomb([
      [1.03, 0.0, 0.0],
      [0.0, 1.0, 0.0],
      [0.0, 0.0, 0.95],
    ])
    .modulate({ brightness: 1.03, saturation: 1.05 })
    .linear(1.06, -6);

async function build(slot) {
  const img = await load(slot.src);
  const [bw, bh] = slot.size.split("x").map(Number);
  const ratio = bw / bh;
  let boxes = slot.crop
    ? [[slot.crop[0] * img.w, slot.crop[1] * img.h, slot.crop[2] * img.w, slot.crop[3] * img.h]]
    : slot.mode === "full"
      ? [[0, 0, img.w, img.h]]
      : regions(img, slot.mode);
  if (slot.trim) {
    const [t, r, b, l] = slot.trim;
    boxes = boxes.map(([x, y, bw2, bh2]) => [x + bw2 * l, y + bh2 * t, bw2 * (1 - l - r), bh2 * (1 - t - b)]);
  }
  const position = slot.pos ?? "centre";
  const maxW = slot.hero ? 2400 : Math.min(1600, Math.max(1000, Math.round((bw * 2) / 100) * 100));

  let out;
  if (boxes.length === 2) {
    // Before | after side by side: each half gets half the slot's width.
    const gap = 8;
    const halfRatio = ratio / 2;
    const h = Math.round(Math.min(...boxes.map((b) => Math.min(b[3], b[2] / halfRatio)), maxW / ratio));
    const hw = Math.round(h * halfRatio);
    const halves = await Promise.all(
      boxes.map((b, i) =>
        toSharp(img, b)
          .resize(hw, h, { fit: "cover", position: slot.halves?.[i] ?? "centre" })
          .png()
          .toBuffer(),
      ),
    );
    out = sharp({
      create: { width: hw * 2 + gap, height: h, channels: 3, background: "#ffffff" },
    }).composite([
      { input: halves[0], left: 0, top: 0 },
      { input: halves[1], left: hw + gap, top: 0 },
    ]);
    out = sharp(await out.png().toBuffer());
  } else {
    const b = boxes[0];
    const width = Math.round(Math.min(maxW, b[2], b[3] * ratio));
    out = toSharp(img, b).resize(width, Math.round(width / ratio), { fit: "cover", position });
  }
  const file = path.join(outDir, `${slot.slot}.webp`);
  const info = await grade(out).webp({ quality: 80 }).toFile(file);
  console.log(`${slot.slot}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}

for (const slot of slots) if (!only.length || only.includes(slot.slot)) await build(slot);
