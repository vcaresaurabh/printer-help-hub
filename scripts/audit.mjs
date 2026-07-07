// Zero-dependency static audit of the exported site (run after `npm run build`).
// Checks: broken internal links, forbidden compliance terms, independence disclosure
// presence, one <h1> per page, and <title> presence.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
if (!fs.existsSync(OUT)) {
  console.error("No ./out — run `npm run build` first.");
  process.exit(1);
}

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith(".html") ? [p] : [];
  });

const routeOf = (f) => "/" + path.relative(OUT, f).replace(/index\.html$/, "").replace(/\\/g, "/");

const resolves = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return fs.existsSync(path.join(OUT, "index.html"));
  const rel = clean.replace(/^\//, "");
  return [
    path.join(OUT, rel),
    path.join(OUT, rel, "index.html"),
    path.join(OUT, rel.replace(/\/$/, "") + ".html"),
  ].some((c) => fs.existsSync(c));
};

const visible = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");

const forbidden = [
  /\bguaranteed fix\b/i,
  /\b#1\b/,
  /\b24\/7\b/,
  /\bofficial (support|partner|repair|service center)\b/i,
  /\bauthorized (dealer|partner|service|repair)\b/i,
  /\bcertified partner\b/i,
  /\byour (printer|device|computer) is at risk\b/i,
  /\bvirus detected\b/i,
  /\bno fix,? no fee\b/i,
];

const files = walk(OUT);
const broken = [];
const hits = [];
const noDisclosure = [];
const badH1 = [];
const noTitle = [];

for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const text = visible(html);
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(href) || !href.startsWith("/")) continue;
    if (!resolves(href)) broken.push(`${routeOf(f)} → ${href}`);
  }
  for (const re of forbidden) {
    const mm = text.match(re);
    if (mm) hits.push(`${routeOf(f)}: "${mm[0]}"`);
  }
  if (!/not affiliated with/i.test(text)) noDisclosure.push(routeOf(f));
  const h1 = (html.match(/<h1\b/gi) || []).length;
  if (h1 !== 1) badH1.push(`${routeOf(f)} (h1=${h1})`);
  if (!/<title>/i.test(html)) noTitle.push(routeOf(f));
}

const report = (label, arr) => {
  console.log(`\n${arr.length === 0 ? "✓" : "✗"} ${label}: ${arr.length}`);
  arr.slice(0, 40).forEach((x) => console.log("   ", x));
};

console.log(`Audited ${files.length} HTML files in ./out`);
report("Broken internal links", broken);
report("Forbidden compliance terms", hits);
report("Pages missing independence disclosure", noDisclosure);
report("Pages without exactly one <h1>", badH1);
report("Pages missing <title>", noTitle);

const failed = broken.length || hits.length || noDisclosure.length || badH1.length || noTitle.length;
process.exit(failed ? 1 : 0);
