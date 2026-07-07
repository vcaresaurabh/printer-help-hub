# SEO Plan — printer-help-hub

## Fixed technical SEO (implemented)
- Central metadata builder `lib/seo.ts` → per-page title, meta description, canonical, OpenGraph, Twitter.
  Root template `%s · Printer Help Hub`; service/guide pages use `absoluteTitle` (already keyword-rich, ≤51c).
- One `<h1>` per page (verified across all 25 routes). Logical H2/H3 hierarchy.
- `trailingSlash: true`; `app/sitemap.ts` → `/sitemap.xml`; `app/robots.ts` → `/robots.txt` (both static).
- JSON-LD: `ProfessionalService` on Home (`lib/seo.ts` → `app/page.tsx`); `FAQPage` on every FAQ block
  (`components/sections/faq.tsx`); `BreadcrumbList` on inner pages (`components/layout/breadcrumbs.tsx`);
  `HowTo` on guides (`components/templates/guide-page.tsx`).
- Internal linking: each service links its paired guide and vice-versa (`content/types.ts` → `guideMeta`).

## Keyword map (per page primary → secondary)
| Route | Primary | Secondary |
| --- | --- | --- |
| `/services/printer-setup/` | new printer setup | how to install a new printer; connect printer to computer; install on Windows/Mac |
| `/services/wireless-printer-setup/` | connect printer to wifi | wireless printer setup; connect to wireless network; WPS setup; won't connect to wifi |
| `/services/printer-offline-fix/` | printer offline fix | printer says offline; get printer online; use printer offline setting; restart print spooler |
| `/services/driver-installation/` | printer driver download and installation | install a printer driver; download driver on Windows/Mac; driver not installed |
| `/services/print-quality-issues/` | print quality issues | fix faded prints; clear a paper jam; printer error codes; printhead cleaning |
| `/guides/set-up-new-printer/` | how to set up a new printer | → /services/printer-setup/ |
| `/guides/connect-printer-to-wifi/` | how to connect a printer to WiFi | → /services/wireless-printer-setup/ |
| `/guides/fix-printer-offline/` | printer says offline | → /services/printer-offline-fix/ |
| `/guides/install-printer-driver/` | install printer driver | → /services/driver-installation/ |
| `/guides/fix-print-quality/` | how to fix faded or streaky prints | → /services/print-quality-issues/ |
| `/guides/clear-paper-jam/` | how to clear a paper jam | → /services/print-quality-issues/ |

Full per-page keyword arrays live in `src/content/services.data.json` / `guides.data.json` (`keywords` field).

## Hub / info page titles (branded via template)
Home · Services · How It Works · Guides · Pricing · About · Contact + 6 policy pages — all with unique
titles ≤60c and unique meta descriptions (see each `app/**/page.tsx` `buildMetadata`).
