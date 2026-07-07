# Deployment Guide — Printer Help Hub (Hostinger shared hosting)

The site is a **static export** (`output: "export"`). There is no server runtime — you upload
the contents of `out/` to your web root. No Node.js is needed on the host.

## 1. Set integration IDs (only when you have them)
`NEXT_PUBLIC_*` values are **inlined at build time**, so set them *before* building. Create
`.env.local` (copy `.env.example`) and fill any you have:

```
NEXT_PUBLIC_JIVOCHAT_ID=your-jivochat-id
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=xxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://printer-help-hub.com   # optional; defaults to this
```

Leaving any unset is fine — that tag simply won't load. You can deploy now and rebuild later
once you have them. Also set the **support phone number** in `src/config/site.ts`
(`phone` + `phoneHref`) when available; the phone CTAs stay hidden until then.

## 2. Build the static site
```
npm install
npm run build      # emits ./out
```
Verify locally: `npm run serve` → open http://localhost:3000.

## 3. Upload to Hostinger
1. In hPanel → **File Manager** (or SFTP), open your domain's web root — usually `public_html/`.
2. Upload **the entire contents of `out/`** into `public_html/` (not the `out` folder itself —
   its *contents*, so `index.html` sits at the web root).
3. **Include the hidden `.htaccess`** file (enable "show hidden files" in File Manager, or ensure
   your SFTP client uploads dotfiles). It handles HTTPS, the www→non-www redirect, caching,
   compression, security headers, and the 404 page.
4. Confirm `sitemap.xml` and `robots.txt` are at the web root.

## 4. Domain & HTTPS
- Point `printer-help-hub.com` (and `www`) to the hosting account.
- Enable the free SSL certificate in hPanel (Let's Encrypt). The `.htaccess` forces HTTPS and
  redirects `www` → non-www, so the canonical site is `https://printer-help-hub.com/`.

## 5. Post-deploy verification checklist
- [ ] `https://printer-help-hub.com/` loads over HTTPS (padlock), `http://` redirects to `https://`.
- [ ] `https://www.printer-help-hub.com/` redirects to the non-www URL.
- [ ] Independent-provider disclosure shows above the fold and in the footer.
- [ ] Header nav works; all footer links resolve (no 404s). Try a service, a guide, and each policy page.
- [ ] Visit a made-up URL → the custom 404 page appears with helpful links.
- [ ] Cookie banner appears on first visit; **Decline** loads no analytics/ads; **Accept** loads them.
- [ ] (When JivoChat ID is set) chat button opens the widget; it does **not** auto-open aggressively.
- [ ] `https://printer-help-hub.com/sitemap.xml` and `/robots.txt` load.
- [ ] Mobile check at ~375px: text is large/legible, buttons easy to tap, no horizontal scroll.
- [ ] Run Lighthouse on the live URL (Home + one service + one guide) — expect 90+ across the board.
- [ ] Rich Results Test (search.google.com/test/rich-results) on Home (ProfessionalService) and a
      guide (HowTo/FAQ) — confirm structured data is detected.

## 6. Conversion tracking test (after IDs are set)
- [ ] In Google Tag Assistant, confirm GA4 + Ads fire **only after** accepting cookies.
- [ ] Submit name + phone in the JivoChat pre-chat form → confirm the Ads conversion event fires
      (`jivo_onChangeContacts` → `gtag('event','conversion', …)`; see `src/lib/analytics.ts`).
- [ ] Add the TCPA consent line to the JivoChat pre-chat form in the JivoChat dashboard:
      "By providing your number you agree to be contacted about your support request."

## Updating content later
Edit the source (or `src/content/*.data.json`), run `npm run build`, and re-upload `out/`.
Because HTML is served with `Cache-Control: must-revalidate`, updated pages appear immediately;
hashed JS/CSS are cache-busted automatically.
