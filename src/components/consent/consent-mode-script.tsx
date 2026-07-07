/**
 * Google Consent Mode v2 bootstrap. Rendered inline as the first thing in <body> so it
 * runs before any analytics/ads tag. All ad/analytics storage defaults to DENIED; the
 * cookie banner flips these to granted only if the user accepts. This is what makes the
 * "tags fire only after consent" guarantee true.
 */
const CONSENT_DEFAULT = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'granted','security_storage':'granted','wait_for_update':500});
gtag('set','url_passthrough',true);
`.trim();

export function ConsentModeScript() {
  return (
    <script id="consent-mode-default" dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
  );
}
