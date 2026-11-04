#!/usr/bin/env node
// Tells Bing, Yandex and other IndexNow search engines that pages changed, so
// they crawl them sooner. (Google does not use IndexNow; use Search Console.)
//
// Usage:
//   node scripts/indexnow.mjs                      # dry run: lists what would be sent
//   node scripts/indexnow.mjs --submit             # sends every URL in the live sitemap
//   node scripts/indexnow.mjs --submit /home-cleaning /blog/some-post   # only these paths
//   node scripts/indexnow.mjs --site https://preview.example.com        # another origin (dry run only unless --submit)
//
// The key is the 32-character hex file name in public/<key>.txt, served at
// https://sacleaninggroup.ca/<key>.txt. Run with --submit only after a deploy
// to production, and only when pages were added or changed.

import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const submit = args.includes("--submit");
const siteFlag = args.indexOf("--site");
const site = (siteFlag >= 0 ? args[siteFlag + 1] : "https://sacleaninggroup.ca").replace(/\/$/, "");
const paths = args.filter((arg, index) => arg.startsWith("/") && args[index - 1] !== "--site");

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const keyFile = readdirSync(publicDir).find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) throw new Error("No IndexNow key file (<32 hex chars>.txt) in public/.");
const key = keyFile.replace(".txt", "");
if (readFileSync(join(publicDir, keyFile), "utf8").trim() !== key) {
  throw new Error(`${keyFile} must contain exactly its own name's key.`);
}

let urlList;
if (paths.length) {
  urlList = paths.map((path) => `${site}${path}`);
} else {
  const response = await fetch(`${site}/sitemap.xml`);
  if (!response.ok) throw new Error(`Could not read ${site}/sitemap.xml (${response.status})`);
  urlList = [...(await response.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

const host = new URL(site).host;
console.log(`${urlList.length} URLs for ${host}, key ${key}`);
for (const url of urlList) console.log(`  ${url}`);

if (!submit) {
  console.log("\nDry run. Add --submit to send these to api.indexnow.org.");
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `${site}/${keyFile}`, urlList }),
});
// 200 = received, 202 = received and the key is still being checked. 403/422 = key file unreachable or URLs not on host.
console.log(`\nIndexNow responded ${response.status} ${response.statusText}`);
process.exit(response.status === 200 || response.status === 202 ? 0 : 1);
