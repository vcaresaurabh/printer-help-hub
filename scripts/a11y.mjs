// Accessibility audit (WCAG 2.1 AA via axe-core) over every exported route.
// Run after `npm run build`. Requires devDeps: playwright, @axe-core/playwright,
// and browser binaries (`npx playwright install --with-deps chromium`).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const OUT = path.resolve("out");
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".json": "application/json", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(OUT, p);
  try {
    if (p.endsWith("/")) f = path.join(OUT, p, "index.html");
    else if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
    if (fs.existsSync(f) && fs.statSync(f).isFile()) {
      res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
      return fs.createReadStream(f).pipe(res);
    }
  } catch {}
  res.writeHead(404, { "Content-Type": "text/html" });
  fs.createReadStream(path.join(OUT, "404.html")).pipe(res);
});

const routes = () => {
  const out = [];
  (function w(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const fp = path.join(d, e.name);
      if (e.isDirectory()) w(fp);
      else if (e.name === "index.html") out.push("/" + path.relative(OUT, fp).replace(/index\.html$/, ""));
    }
  })(OUT);
  return out.sort();
};

await new Promise((r) => server.listen(4321, r));
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

let seriousTotal = 0;
for (const route of routes()) {
  await page.goto("http://localhost:4321" + route, { waitUntil: "networkidle" });
  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  const serious = violations.filter((v) => v.impact === "serious" || v.impact === "critical");
  seriousTotal += serious.length;
  console.log(`${serious.length ? "✗" : "✓"} ${route} — ${violations.length} violation(s)`);
  serious.forEach((v) => console.log(`     [${v.impact}] ${v.id}: ${v.help}`));
}

await browser.close();
server.close();
console.log(seriousTotal ? `\n✗ ${seriousTotal} serious/critical issue(s)` : "\n✓ No serious/critical accessibility violations");
process.exit(seriousTotal ? 1 : 0);
