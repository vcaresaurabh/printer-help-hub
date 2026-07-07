# TODO — printer-help-hub

## Blocked on owner (do not invent)
- [ ] Support phone number (US format) → unlocks header/contact/footer phone CTA + TCPA notice UI
- [ ] JivoChat widget id → `NEXT_PUBLIC_JIVOCHAT_ID`
- [ ] GA4 measurement id → `NEXT_PUBLIC_GA4_ID`
- [ ] Google Ads conversion id + label → `NEXT_PUBLIC_GOOGLE_ADS_ID`, `..._CONVERSION_LABEL`

## Next checkpoint (Phase 2 — needs owner pick)
- [ ] Present 3 visual directions (palette + font + hero wireframe + one SVG illustration sample each)
- [ ] Present SEO keyword map (per-page keywords, titles, 6 guide titles + service pairings)
- [ ] Owner selects one direction → lock palette/font/illustration style

## Carried-forward engineering TODOs
- [ ] Finalize font wiring in `layout.tsx` (`--font-sans`) once font chosen
- [ ] Add Framer Motion (Phase 3) for ≤300ms micro-interactions only
- [ ] Confirm `mailto:` fallback form vs JivoChat-only lead path

## Done
- [x] Phase 0 discovery
- [x] Phase 1 scaffold + static export + shadcn + folders + config + /docs
