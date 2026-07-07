# Project Context — printer-help-hub

> Business identity, decisions, and constraints. **Source of truth for facts** is
> [`src/config/site.ts`](../src/config/site.ts); this file records the *why* and the
> answers gathered at Phase 0. Never fabricate additions here.

## What this is
A brand-new, production-ready **US printer technical support website** for an
**independent third-party** service provider. It must survive a manual Google Ads
policy review for the restricted third-party-tech-support vertical, and meet US
consumer-protection law (CCPA/CPRA, FTC, TCPA) plus WCAG 2.1 AA.

Reference site (structure/purpose only, **not** design): https://printonwifi.com/ —
the new site must have zero visual resemblance.

## Business identity (Phase 0 answers — confirmed 2026-07-07)
| Field | Value |
| --- | --- |
| Brand name | printer-help-hub (display: "Printer Help Hub") |
| Production domain | printer-help-hub.com |
| Legal entity | SHISHIR ALE (must match Google Ads advertiser verification) |
| Registered address | Chander Nagar, Ghaziabad, Uttar Pradesh 201011, India |
| Support email | contact@printer-help-hub.com |
| Support phone | **DEFERRED** — owner will provide a US-format number later |
| Support hours | Monday–Friday, 9:00 AM–6:00 PM ET |
| Pricing model | **Free consultation**; a written quote is approved before any paid work |
| Refund policy | Refund within **14 days** if a paid service was not delivered as agreed. **NOT** "no fix, no fee" — must never be advertised as one. |
| Governing law | India (registered jurisdiction) |
| Arbitration | Yes — binding arbitration + class-action waiver, with a **30-day opt-out** |
| JivoChat widget id | **DEFERRED** (env: `NEXT_PUBLIC_JIVOCHAT_ID`) |
| GA4 / Google Ads ids | **DEFERRED** (env: `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `..._CONVERSION_LABEL`) |
| Contact handoff (static site) | `mailto:` fallback form + JivoChat as primary lead channel (confirmed direction) |

## Hard rules (do not violate)
1. **Never fabricate** testimonials, reviews, ratings, customer counts, "years in
   business", certifications, awards, or performance statistics. Trust sections use
   value/process cards only (facts the owner confirmed).
2. **Independent-provider disclosure** appears above the fold on landing pages, in the
   footer of every page, and on Terms/Disclaimer. Exact wording in `INDEPENDENCE_DISCLOSURE`.
3. Printer brand names appear as **plain text, nominative use only** (e.g. "help for
   HP® printers"). No OEM logos, product photos, color schemes, or "official/authorized/
   certified partner" wording.
4. **No fear/urgency**: no fake error/virus warnings, countdown timers, system-dialog
   popups, alarming auto-chat, or claims of remote diagnosis before consent.
5. Pricing is disclosed on a dedicated page; the refund policy is honored exactly as
   written; no superlatives ("#1", "best", "guaranteed", "24/7") unless literally true.

## Deferred items (blocked on owner input — do not invent)
- Support phone number → UI shows chat/email CTAs only until provided.
- JivoChat widget id, GA4 id, Google Ads conversion id + label.

## Open decisions to confirm at later phases
- Final visual direction + font (Phase 2 checkpoint).
- Whether the `mailto:` fallback form stays, or JivoChat is the sole lead path (Phase 1/3).
