# Design System — printer-help-hub

> Palette, typography, and illustration style are **proposed and locked in Phase 2**
> (owner picks 1 of 3 directions). This file records the tokens that are already fixed
> by the UX doctrine, and reserves the slots the Phase 2 choice fills.

## Audience-driven constraints (fixed — not up for design debate)
Target users: **55+, US, frustrated, non-technical.**
- Base body font **18px**, generous line-height (~1.7), max content width **~72ch**.
- One primary CTA per screen; calm, reassuring tone ("We'll walk you through it").
- Buttons min **48px** touch target; links underlined; visible focus rings.
- Contrast **≥ 4.5:1** body / **3:1** large text (WCAG AA).
- No popups, interstitials, autoplay, or fear-based UI.
- `prefers-reduced-motion` respected; animations ≤ 300ms (fade/slide only).

## Token system
Tokens live as **oklch CSS variables** in `src/app/globals.css` (`:root` + `.dark`),
exposed to Tailwind via `@theme inline`. Semantic names (shadcn): `background`,
`foreground`, `primary`, `secondary`, `muted`, `accent`, `card`, `popover`, `border`,
`input`, `ring`, `destructive`, `chart-1..5`.

### Radius (fixed)
`--radius: 0.625rem` base → `rounded-lg` cards per the brief. Scale derived in `@theme`
(`sm .6× / md .8× / lg 1× / xl 1.4× / 2xl 1.8×`).

### Typography scale (fixed; font family chosen in Phase 2)
| Token | Size | Use |
| --- | --- | --- |
| body | 18px / 1.7 | default paragraph |
| small | 16px | captions, legal fine print (still ≥16px for readability) |
| h3 | 22–24px | sub-sections |
| h2 | 28–32px | section headings |
| h1 | 36–44px | one per page |
| display | 48–56px | hero headline |
One variable **humanist sans** family, self-hosted via `next/font` (no runtime CDN call).
`next/font/google` self-hosts at build time and is compliant; `next/font/local` is the
fallback if we ship the font files directly.

### Spacing & layout (fixed)
- 4px base spacing rhythm (Tailwind default scale).
- Section vertical padding generous (`py-16`/`py-24`).
- Content column capped at ~72ch (`max-w-prose`-ish, ~65–72ch).
- Soft shadows, `rounded-lg` cards, generous whitespace; no gradient overload, no glassmorphism.

## Chosen direction — "Harbor" (locked; owner may veto, palette is CSS-isolated)
- [x] **Palette** (oklch in `globals.css`): background warm cream `0.985 0.006 90`; ink deep slate-teal
      `0.24 0.028 213`; **primary** deep teal `0.45 0.09 200` (white text passes AA); **warm** amber
      `0.80 0.13 72` (single accent, always with dark `warm-foreground`). Not generic tech-blue. Dark
      mode defined but the site ships light-only (simplest for the audience).
- [x] **Font**: Source Sans 3 (variable humanist sans), self-hosted via `next/font` — no CDN call.
- [x] **Illustrations**: flat/duotone original SVG — `illustrations/logo.tsx` (mark + wordmark),
      `service-icons.tsx` (5 duotone service icons), `scenes.tsx` (hero + support-agent). No shield/checkmark.
- [x] **Favicon**: `app/icon.svg` — original printer mark on teal, amber accent. No OEM lookalike.
- [x] **Radius** `0.75rem` (rounded-lg cards); soft shadows; generous whitespace; no gradients overload/glass.

## Illustration rules (fixed)
- 100% original custom SVG authored in code — zero stock, zero downloaded images, zero
  OEM product renders, zero AI images of branded printers.
- Flat/duotone style using palette tokens; decorative SVGs get `aria-hidden`, meaningful
  ones get `role="img"` + `<title>`.
