# Progress — printer-help-hub

_Read this first before rescanning the codebase._

## Current status: Phases 0–7 built and verified. Awaiting owner review + deferred inputs.

### ✅ Phase 0 — Discovery
All identity/compliance inputs gathered (see `project-context.md`). Deferred: phone, integration IDs.

### ✅ Phase 1 — Foundation
Next.js 15.5.20 + React 19 + TS + Tailwind v4 + shadcn/ui. Static export (`out/`) verified. `src/config/site.ts`
= single source of truth. `/docs` memory + `.env.example`.

### ✅ Phase 2 — Design ("Harbor")
Deep teal + warm amber on cream palette (oklch tokens in `globals.css`). Source Sans 3 (self-hosted).
Original SVG: logo/mark (`illustrations/logo.tsx`), favicon (`app/icon.svg`), 5 service icons + 2 scenes.
18px base type, 48px touch targets, WCAG-contrast tokens. **NOTE: design direction was chosen by Claude
(user said "continue"); owner may veto — palette is isolated to `:root`/`.dark` in `globals.css`.**

### ✅ Content workflow (background, 22 agents, 0 errors)
5 services (~1,750–2,050 words each) + 6 guides, each generated then adversarially compliance-edited
(FTC/Google-Ads). Decoded to `content/services.data.json` / `guides.data.json`. Meta titles ≤51c, descs ≤153c.

### ✅ Phase 3 — Core build
Layout shell (header/footer/disclosure bar/breadcrumbs/skip link), Home, Services hub + 5 data-driven
service pages, How It Works, Pricing. All custom SVG.

### ✅ Phase 4 — Content & policies
Guides hub + 6 guides. About, Contact (mailto form + TCPA notice). 6 legal pages (privacy, terms, refund,
disclaimer, accessibility, do-not-sell) hand-written to Phase 0 facts. Cookie consent + Consent Mode v2.
Helpful 404.

### ✅ Phase 5 — Integrations & hardening
JivoChat lazy-load + Ads conversion hook (`lib/analytics.ts`), GA4/Ads behind Consent Mode, all schema,
`sitemap.xml`/`robots.txt`, `public/.htaccess` (HTTPS, non-www canonical, caching, security headers + CSP).

### ✅ Phase 6 — QA & compliance audit
- Broken-link crawl of `out/`: **0 broken**. One `<h1>`/page. All titles present.
- axe (Playwright) across 25 routes: **0 violations** (WCAG 2.1 AA).
- Lighthouse mobile (gzipped ≈ prod): Perf 90–97 / A11y 95–96 / BP 100 / SEO 92; LCP 2.2s; CLS 0. Desktop Perf 99.
- Compliance term scan clean. Full checklist walked in `compliance-checklist.md`.

### ✅ Phase 7 — Build & deploy package
`npm run build` → `out/` (26 HTML docs incl. 404 + sitemap/robots/.htaccess). See `DEPLOY.md`.

## Deferred (owner) — the ONLY things left
- Support phone number → unhides phone CTAs (`siteConfig.phone`).
- `NEXT_PUBLIC_JIVOCHAT_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`.
- Owner review of policy wording (recommended, and legal counsel for Terms/arbitration).
- Nothing is committed to git yet.
