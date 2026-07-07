# printer-help-hub

Production website for **Printer Help Hub** — an independent, third-party printer
technical-support provider (operated by SHISHIR ALE). Built to pass Google Ads
third-party-tech-support policy review and US consumer-protection requirements
(CCPA/CPRA, FTC, TCPA) with WCAG 2.1 AA accessibility.

> **Independent provider:** Printer Help Hub is not affiliated with, endorsed by, or
> sponsored by HP, Canon, Epson, Brother, or any printer manufacturer. Brand names are
> used nominatively for identification only.

## Stack
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui ·
**static export** for Hostinger shared hosting (`output: "export"`).

## Getting started
```bash
npm install
cp .env.example .env.local   # optional: fill in when integration IDs are available
npm run dev                  # http://localhost:3000
```

## Scripts
| Script | Purpose |
| --- | --- |
| `npm run dev` | Turbopack dev server |
| `npm run build` | Static export → `./out` (webpack) |
| `npm run serve` | Preview the exported `out/` folder |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Project memory
See [`/docs`](./docs): `project-context.md`, `architecture.md`, `design-system.md`,
`seo-plan.md`, `compliance-checklist.md`, `progress.md`, `todo.md`. Read `progress.md`
first. Business facts live in [`src/config/site.ts`](./src/config/site.ts) — never hardcode
identity elsewhere.

## Build phases
0 Discovery · 1 Foundation · 2 Design · 3 Core build · 4 Content & policies ·
5 Integrations & hardening · 6 QA & compliance audit · 7 Build & deploy.
