// Shared setup for the QA scripts: finds Playwright and Chromium without adding
// either to package.json (cloud sessions ship both preinstalled).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

export const BASE = process.env.BASE_URL || "http://localhost:3000";
export const sharp = createRequire(import.meta.url)("sharp");

async function loadPlaywright() {
  const candidates = [
    process.env.PLAYWRIGHT_MODULE,
    "/opt/node22/lib/node_modules/playwright/index.mjs",
  ].filter(Boolean);
  for (const file of candidates) if (fs.existsSync(file)) return import(file);
  return import("playwright");
}

function chromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
  if (!fs.existsSync(root)) return undefined;
  const dirs = fs
    .readdirSync(root)
    .filter((dir) => /^chromium-\d+$/.test(dir))
    .sort()
    .reverse();
  for (const dir of dirs) {
    const file = path.join(root, dir, "chrome-linux", "chrome");
    if (fs.existsSync(file)) return file;
  }
  return undefined;
}

export async function launch() {
  const { chromium } = await loadPlaywright();
  return chromium.launch({ executablePath: chromePath() });
}

/** Scroll the whole page so every <Reveal> animation fires, then return to the top. */
export async function revealAll(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1300);
}

/** Console errors worth reporting (third-party embeds are blocked in the sandbox). */
export function isRealError(text) {
  return !/Failed to load resource|ERR_TUNNEL|elfsight|launch27|googletagmanager/i.test(text);
}
