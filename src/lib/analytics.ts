import { siteConfig } from "@/config/site";

/**
 * Client-side analytics/ads/chat loading, gated by Google Consent Mode v2.
 * Nothing here loads until the user accepts cookies. All IDs are env-driven and
 * may be null (deferred) — in which case the corresponding tag simply never loads.
 */

type ConsentChoice = "accepted" | "declined";
export const CONSENT_KEY = "phh_consent_v1";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    // JivoChat lead callback (name/phone/email captured in the pre-chat form).
    jivo_onChangeContacts?: (data: { name?: string; email?: string; phone?: string }) => void;
  }
}

const { ga4Id, googleAdsId, googleAdsConversionLabel, jivoChatId } = siteConfig.integrations;

let tagsLoaded = false;

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(CONSENT_KEY);
  return v === "accepted" || v === "declined" ? v : null;
}

export function storeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* storage may be unavailable; consent still applies for this session */
  }
}

/** Called on "Accept": flip Consent Mode to granted, then load tags. */
export function grantConsentAndLoad() {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
  loadTags();
}

/** Load GA4 / Google Ads / JivoChat once, deferred to protect LCP. */
export function loadTags() {
  if (tagsLoaded || typeof window === "undefined") return;
  tagsLoaded = true;

  const run = () => {
    const gaTagId = ga4Id ?? googleAdsId;
    if (gaTagId) {
      injectScript(`https://www.googletagmanager.com/gtag/js?id=${gaTagId}`);
      window.gtag?.("js", new Date());
      if (ga4Id) window.gtag?.("config", ga4Id);
      if (googleAdsId) window.gtag?.("config", googleAdsId);
    }
    if (jivoChatId) {
      setupJivoLeadHook();
      injectScript(`https://code.jivosite.com/widget/${jivoChatId}`);
    }
  };

  const w = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void;
  };
  if (typeof w.requestIdleCallback === "function") {
    w.requestIdleCallback(run, { timeout: 3000 });
  } else {
    w.setTimeout(run, 1200);
  }
}

function injectScript(src: string) {
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

/**
 * JivoChat lead → Google Ads conversion. JivoChat calls `jivo_onChangeContacts`
 * when a visitor submits name/phone/email in the pre-chat form. We treat that as a
 * qualified lead and fire the Ads conversion (only if consent is granted, which it is
 * by the time tags are loaded, and only if the Ads IDs are configured).
 */
function setupJivoLeadHook() {
  window.jivo_onChangeContacts = (data) => {
    if (data && (data.phone || data.email || data.name)) fireLeadConversion();
  };
}

export function fireLeadConversion() {
  if (!googleAdsId || !googleAdsConversionLabel) return;
  window.gtag?.("event", "conversion", {
    send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
  });
}
