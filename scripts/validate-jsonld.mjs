#!/usr/bin/env node
// Checks every JSON-LD block on the built site. Run after `npx next build`:
//   node scripts/validate-jsonld.mjs
//
// It reads the prerendered pages in .next/server/app, and for each one:
//  - parses every <script type="application/ld+json"> (syntax errors fail);
//  - fails on a node with the same @id defined twice with different content;
//  - fails on AggregateRating / Review / opening hours / streetAddress (not approved);
//  - warns about "@id" references that no page defines (each service page must
//    define its own #service block, which the offer catalog points at).
// Across the whole site it also fails if one @id is defined differently on two pages.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = ".next/server/app";
const banned = new Set([
  "AggregateRating",
  "Review",
  "openingHours",
  "openingHoursSpecification",
  "streetAddress",
]);

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* htmlFiles(path);
    else if (name.endsWith(".html")) yield path;
  }
}

function* nodes(value) {
  if (Array.isArray(value)) for (const item of value) yield* nodes(item);
  else if (value && typeof value === "object") {
    yield value;
    for (const child of Object.values(value)) yield* nodes(child);
  }
}

const errors = [];
const warnings = [];
const pendingRefs = [];
const siteDefs = new Map(); // @id -> { json, page }
let pages = 0;
let blocks = 0;

for (const file of htmlFiles(root)) {
  const html = readFileSync(file, "utf8");
  const page =
    "/" +
    relative(root, file)
      .replace(/\.html$/, "")
      .replace(/^index$/, "");
  const found = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!found.length) continue;
  pages += 1;

  const defs = new Map();
  const refs = new Set();
  for (const [, body] of found) {
    blocks += 1;
    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      errors.push(`${page}: invalid JSON-LD (${error.message})`);
      continue;
    }
    for (const node of nodes(data)) {
      for (const key of Object.keys(node)) {
        if (banned.has(key)) errors.push(`${page}: "${key}" is not allowed`);
      }
      const types = [node["@type"]].flat();
      for (const type of types) {
        if (banned.has(type)) errors.push(`${page}: type "${type}" is not allowed`);
      }
      const id = node["@id"];
      if (typeof id !== "string") continue;
      const definition = Object.keys(node).filter((key) => key !== "@id" && key !== "@context");
      if (definition.length === 0) {
        refs.add(id);
        continue;
      }
      const json = JSON.stringify(node);
      if (defs.has(id) && defs.get(id) !== json) errors.push(`${page}: conflicting @id ${id}`);
      defs.set(id, json);
      const other = siteDefs.get(id);
      if (other && other.json !== json && !id.endsWith("#breadcrumb")) {
        errors.push(`${page}: @id ${id} is defined differently on ${other.page}`);
      }
      siteDefs.set(id, { json, page });
    }
  }
  for (const id of refs) pendingRefs.push({ page, id });
}

for (const { page, id } of pendingRefs) {
  if (!siteDefs.has(id)) warnings.push(`${page}: reference to ${id} is not defined on any page`);
}

// Unresolved references are expected for the offer catalog until the service pages exist.
const uniqueWarnings = [...new Set(warnings.map((w) => w.replace(/^[^:]+: /, "")))];
console.log(`${pages} pages, ${blocks} JSON-LD blocks, ${siteDefs.size} distinct @ids`);
for (const warning of uniqueWarnings) console.log(`warn: ${warning}`);
for (const error of errors) console.log(`ERROR: ${error}`);
if (errors.length) process.exit(1);
console.log("JSON-LD ok");
