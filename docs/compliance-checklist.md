# Compliance Checklist — printer-help-hub

Status: `✅ done` · `🟡 partial (owner input)` · `🚩 blocked on owner`

Audited at Phase 6. Accessibility verified with axe-core (Playwright) across all 25 routes:
**0 violations at any impact level**. Broken-link crawl of the export: **0 broken links**.
Compliance term scan: clean (only match is "not guaranteed" on /disclaimer/, which is compliant).

## A. Google Ads — Third-Party Tech Support
| # | Requirement | Status | Satisfied by |
| --- | --- | --- | --- |
| A1 | Independent disclosure above the fold, in every footer, and in Terms/Disclaimer | ✅ | Above-fold: `components/layout/disclosure-bar.tsx` (in root `app/layout.tsx`). Footer: `components/layout/site-footer.tsx`. Full text: `INDEPENDENCE_DISCLOSURE` in `config/site.ts`; used on `app/terms/`, `app/disclaimer/`, `app/about/`. |
| A2 | Brand names nominative only; no OEM logos/photos/colors; no "official/authorized/certified" | ✅ | `OEM_BRANDS` nominative list in `config/site.ts` + `app/disclaimer/`. All graphics are original SVG (`components/illustrations/*`). Compliance-edit pass removed every "official"→"own" and "best"/"authorized" (see content `complianceNotes`). |
| A3 | No fake urgency, fake errors/virus warnings, countdowns, system-dialog popups, alarming auto-chat, pre-consent remote-diagnosis claims | ✅ | Content compliance-edited (no fear/urgency). Chat is click-only, no auto-open: `components/chat/chat-button.tsx`. Consent banner is non-modal (`aria-modal="false"`), not a system dialog. Home FAQ + Terms state we never access a device without consent. |
| A4 | Legal entity, address, phone, email on Contact + footer; pricing on a dedicated page | 🟡 | Entity/address/email/hours on `app/contact/` + footer. Pricing: `app/pricing/` + `components/sections/pricing-transparency.tsx`. **Phone deferred** — UI hides phone until `siteConfig.phone` is set (never fabricated). |
| A5 | Working nav, no broken links, unique substantial content/page, working privacy link, HTTPS | ✅ | Broken-link crawl: 0. Each service ~1,750–2,050 words, each guide unique. Privacy link in footer works. HTTPS forced in `public/.htaccess`. |
| A6 | Educational-first: guides help self-solve; support optional | ✅ | Service pages lead with symptoms→causes→self-fix steps (`components/templates/service-page.tsx`); guides are pure how-to (`components/templates/guide-page.tsx`). Support presented as optional in every "when to get help" block. |

## B. Legal / consumer protection
| # | Requirement | Status | Satisfied by |
| --- | --- | --- | --- |
| B7 | Privacy Policy — CCPA/CPRA (categories, purposes, third parties, retention, CA rights, Do-Not-Sell link, request contact) + GDPR-lite | ✅ | `app/privacy-policy/page.tsx` (JivoChat + GA/Ads named; CA rights; GDPR-lite section). Footer Do-Not-Sell link → `app/do-not-sell/`. |
| B8 | Terms — scope, independent status, no-fix, liability limit, governing law = India, arbitration + 30-day opt-out | ✅ | `app/terms/page.tsx` (governing law India; `siteConfig.arbitration.optOutDays` = 30). |
| B9 | Refund & Cancellation — plain English, matches model (14-day, not "no fix, no fee") | ✅ | `app/refund-policy/page.tsx` (`siteConfig.refund.windowDays` = 14; `noFixNoFee: false`). |
| B10 | Disclaimer — full trademark list, independent status, results not guaranteed | ✅ | `app/disclaimer/page.tsx` (renders `OEM_BRANDS`). |
| B11 | Accessibility Statement + genuine WCAG 2.1 AA | ✅ | `app/accessibility/page.tsx`. Verified: axe 0 violations/25 pages; skip link (`components/layout/skip-link.tsx`); visible focus (`globals.css`); labeled inputs (`components/contact/contact-form.tsx`); `prefers-reduced-motion` (`globals.css`); keyboard-operable chat trigger. |
| B12 | Cookie consent + Consent Mode v2 (default denied, update on accept, equal-weight buttons) | ✅ | Default denied: `components/consent/consent-mode-script.tsx`. Banner + update: `components/consent/consent-manager.tsx` + `lib/analytics.ts`. Equal-weight Accept/Decline, no pre-checked boxes. |
| B13 | TCPA notice wherever a phone number is collected | ✅ | `components/contact/contact-form.tsx` — consent line beside the optional phone field, no marketing bundling. (Mirror into JivoChat pre-chat form when the widget ID is added.) |

## C. Content honesty
| # | Requirement | Status | Satisfied by |
| --- | --- | --- | --- |
| C14 | No unprovable superlatives; real hours only | ✅ | Term scan clean. Hours (`Mon–Fri 9–6 ET`) from `siteConfig.hours`, shown consistently. |
| C15 | Flawless grammar / US English | ✅ | Compliance-edit pass standardized US spelling (e.g., "grayed", "neighbor") — see content `complianceNotes`. |
| C16 | No fabricated testimonials/reviews/ratings/counts/years/certs/awards/stats | ✅ | None present anywhere. Trust sections use value/process cards only (`components/sections/trust-strip.tsx`, `about`). Enforced by policy comment in `config/site.ts`. |

## Remaining owner inputs (🚩 — cannot be completed without the owner)
- **Support phone number** → unhides phone CTA in header/footer/contact + enables tel: links.
- **JivoChat widget id** (`NEXT_PUBLIC_JIVOCHAT_ID`) → live chat loads post-consent; add the TCPA line to its pre-chat form.
- **GA4 id + Google Ads id + conversion label** → analytics/conversion fire post-consent; lead conversion hook already wired (`lib/analytics.ts` → `jivo_onChangeContacts`).
