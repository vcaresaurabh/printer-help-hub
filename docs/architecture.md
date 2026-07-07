# Architecture — printer-help-hub

## Stack
- **Next.js 15.5.20** (App Router) + **React 19.1** + **TypeScript 5**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `globals.css`; PostCSS plugin `@tailwindcss/postcss`)
- **shadcn/ui** — style `base-nova`, built on `@base-ui/react`; icons via `lucide-react`
- **Static export** (`output: "export"`) → deploys to Hostinger shared hosting, no server runtime
- Utilities: `class-variance-authority`, `clsx`, `tailwind-merge` (`cn()` in `src/lib/utils.ts`), `tw-animate-css`
- Animation: Framer Motion (to be added in Phase 3, micro-interactions only, ≤300ms)

## Build & export
- `npm run dev` — Turbopack dev server
- `npm run build` — **webpack** `next build` (Turbopack disabled for build to maximize static-export reliability); emits `./out`
- `npm run serve` — preview the exported `out/` locally
- `npm run typecheck` — `tsc --noEmit`
- Config: [`next.config.ts`](../next.config.ts) — `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`

Static-export implications:
- No API routes, no server components doing runtime data fetch, no `next/image` optimizer.
- Every route emits `/<path>/index.html` (trailing slash); links, sitemap, and `.htaccess` must agree.
- Client-side only for interactivity (consent banner, chat loader, mailto form).

## Folder structure
```
src/
  app/                      App Router routes (pages added Phase 3+)
    layout.tsx              Root layout (fonts, metadata, providers)
    globals.css             Tailwind v4 + design tokens (oklch CSS variables)
    page.tsx                Home (boilerplate until Phase 3)
  components/
    ui/                     shadcn primitives (button added; more per phase)
    layout/                 Header, Footer, Nav, Breadcrumbs, SkipLink, DisclosureBar
    sections/               Hero, ServicesGrid, HowItWorks, TrustStrip, FAQ, CTA
    illustrations/          Custom SVG illustration components (100% original)
    seo/                    JSON-LD builders (ProfessionalService, FAQPage, BreadcrumbList, HowTo)
    consent/                Cookie consent banner + Google Consent Mode v2
    chat/                   JivoChat lazy loader + accessible chat trigger
  config/
    site.ts                 SINGLE SOURCE OF TRUTH: identity, hours, pricing, disclosures
    nav.ts                  Nav + sitemap structure (services, primary, legal)
  content/                  Page data (services, guides, FAQs) — populated Phase 3/4
  hooks/                    Client hooks (consent state, media queries)
  lib/
    utils.ts                cn() helper
public/                     Static assets, favicon, robots.txt, sitemap.xml (Phase 5)
docs/                       Project memory (this folder)
```

## Design token architecture
- Tokens are **oklch CSS variables** in `globals.css` under `:root` / `.dark`, mapped to
  Tailwind utilities via `@theme inline`. shadcn semantic tokens: `background/foreground`,
  `primary`, `secondary`, `muted`, `accent`, `card`, `popover`, `border`, `input`, `ring`,
  `destructive`, `chart-1..5`, `sidebar-*`; radius scale from `--radius`.
- **Phase 2** replaces the neutral placeholder palette with the chosen brand palette by
  editing only the `:root`/`.dark` variable values — component code stays untouched.

## Key data flow (implemented)
- **Consent → tags:** `components/consent/consent-mode-script.tsx` renders an inline script as the
  first node in `<body>` that sets Consent Mode v2 defaults to **denied**
  (`ad_storage`/`ad_user_data`/`ad_personalization`/`analytics_storage`). `components/consent/
  consent-manager.tsx` shows the banner; on **Accept** it calls `grantConsentAndLoad()` in
  `lib/analytics.ts`, which flips consent to `granted` and then (deferred via
  `requestIdleCallback`, protecting LCP) injects gtag.js (GA4 + Ads) and the JivoChat widget.
  On **Decline**, nothing loads. Choice persists in `localStorage` (`phh_consent_v1`); the
  Do-Not-Sell page re-opens the banner via the `phh:open-consent` event.
- **Lead conversion hook (exact):** `lib/analytics.ts` → `setupJivoLeadHook()` assigns
  `window.jivo_onChangeContacts = (data) => { if (data.phone||data.email||data.name)
  fireLeadConversion(); }`. JivoChat invokes `jivo_onChangeContacts` when a visitor submits
  name/phone/email in the pre-chat form. `fireLeadConversion()` calls
  `gtag('event','conversion',{ send_to: '<ADS_ID>/<CONVERSION_LABEL>' })` — only fires when the
  Ads id + label envs are set and only after consent (tags aren't loaded otherwise).
- **All integration IDs are env-driven** (`NEXT_PUBLIC_JIVOCHAT_ID`, `_GA4_ID`, `_GOOGLE_ADS_ID`,
  `_GOOGLE_ADS_CONVERSION_LABEL`). Unset → that tag simply never loads; the site still works.

## QA tooling
- Accessibility: `@axe-core/playwright` over all routes — 0 violations (WCAG 2.1 AA tags).
- Lighthouse (mobile, gzipped ≈ production): Perf 90–97 / A11y 95–96 / BP 100 / SEO 92, LCP 2.2s, CLS 0.
- Static export served with `mod_deflate` (`.htaccess`) — text compression is essential to LCP.

## Decisions log
- **2026-07-07** Build uses webpack, not Turbopack, for static-export safety.
- **2026-07-07** Business facts centralized in `src/config/site.ts`; components never hardcode identity.
- **2026-07-07** shadcn base color = neutral placeholder; brand palette deferred to Phase 2.
