#!/usr/bin/env node
/**
 * Embed tabbed code examples (easy / typed) into stdlib.html between markers.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { escapeHtml, tabBlock } from "./lib/code-tabs.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEBDOCS = path.resolve(__dirname, "..");
const ROOT = path.resolve(WEBDOCS, "..");
const BUILTINS = path.join(ROOT, "examples", "builtins");
const START = "<!-- BUILTIN_CODE_TABS_START -->";
const END = "<!-- BUILTIN_CODE_TABS_END -->";

function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, "/");
}

function walkNy(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkNy(full, out);
    else if (name.endsWith(".ny") && !name.endsWith(".typed.ny")) out.push(full);
  }
  return out;
}

function collectPairs() {
  const pairs = [];
  for (const plain of walkNy(BUILTINS)) {
    const typed = path.join(
      path.dirname(plain),
      `${path.basename(plain, ".ny")}.typed.ny`,
    );
    if (!fs.existsSync(typed)) continue;
    const id = rel(plain)
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    pairs.push({
      id,
      title: rel(plain),
      plain: fs.readFileSync(plain, "utf8").trimEnd(),
      typed: fs.readFileSync(typed, "utf8").trimEnd(),
    });
  }
  return pairs.sort((a, b) => a.title.localeCompare(b.title));
}

function galleryTabBlock(pair) {
  return `
<h4 class="builtin-ex-title" id="ex-${pair.id}"><code>${escapeHtml(pair.title)}</code></h4>
${tabBlock(pair)}`;
}

function main() {
  const pairs = collectPairs();
  const gallery = `
<section id="builtin-examples-gallery">
  <h3 id="builtins-gallery">Runnable examples — easy vs typed</h3>
  <p class="lead">Same program, two styles. Default tab is <strong>Without types</strong> — switch to <strong>With types</strong> when you want explicit annotations.</p>
  ${pairs.map(galleryTabBlock).join("\n")}
</section>`;

  const stdlibPath = path.join(WEBDOCS, "stdlib.html");
  let html = fs.readFileSync(stdlibPath, "utf8");
  const startIdx = html.indexOf(START);
  const endIdx = html.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.error("missing BUILTIN_CODE_TABS markers in stdlib.html");
    process.exit(1);
  }
  const before = html.slice(0, startIdx + START.length);
  const after = html.slice(endIdx);
  html = `${before}\n${gallery}\n${after}`;
  fs.writeFileSync(stdlibPath, html);
  console.log(`builtin snippets: ${pairs.length} tabbed examples embedded`);
}

main();
