/**
 * SINGLE SOURCE OF TRUTH for business identity, contact details, hours, and the
 * legally-required disclosure text.
 *
 * Every page, footer, policy page, and JSON-LD block MUST read from here so that
 * facts stay consistent across the whole site (a Google Ads / FTC review requirement).
 *
 * HARD RULE: do not add testimonials, review counts, ratings, "years in business",
 * certifications, or performance stats here. Only verified facts supplied by the owner.
 *
 * Values marked `DEFERRED` are intentionally placeholders supplied later by the owner.
 * Components must degrade gracefully when a DEFERRED value is null.
 */

export type BusinessHours = {
  /** Human label shown in UI, e.g. "Monday–Friday, 9:00 AM–6:00 PM ET". */
  label: string;
  /** Short label for tight spaces, e.g. "Mon–Fri, 9 AM–6 PM ET". */
  shortLabel: string;
  /** Schema.org OpeningHoursSpecification (used in ProfessionalService JSON-LD). */
  schema: {
    dayOfWeek: string[];
    opens: string; // 24h "HH:MM"
    closes: string; // 24h "HH:MM"
    timezone: string; // IANA
  };
};

export const siteConfig = {
  /* ---- Brand & domain -------------------------------------------------- */
  brandName: "printer-help-hub",
  /** Title-case brand for prose/headings. */
  brandDisplay: "Printer Help Hub",
  domain: "printer-help-hub.com",
  url: "https://printer-help-hub.com",
  tagline: "Independent printer setup & troubleshooting help",

  /* ---- Legal entity (must match Google Ads advertiser verification) ----- */
  legalEntity: "SHISHIR ALE",
  address: {
    line1: "Chander Nagar",
    city: "Ghaziabad",
    region: "Uttar Pradesh",
    postalCode: "201011",
    country: "India",
    countryCode: "IN",
    /** One-line rendering for footer/contact. */
    oneLine: "Chander Nagar, Ghaziabad, Uttar Pradesh 201011, India",
  },

  /* ---- Contact --------------------------------------------------------- */
  email: "contact@printer-help-hub.com",
  /** DEFERRED: US-format support number. Keep null until the owner provides it.
   *  When null, UI shows chat/email CTAs only (never a fabricated number). */
  phone: null as string | null,
  /** Optional tel: href form once phone is set, e.g. "+18005551234". */
  phoneHref: null as string | null,

  /* ---- Hours (US Eastern business hours, weekdays) --------------------- */
  hours: {
    label: "Monday–Friday, 9:00 AM–6:00 PM ET",
    shortLabel: "Mon–Fri, 9 AM–6 PM ET",
    schema: {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
      timezone: "America/New_York",
    },
  } satisfies BusinessHours,

  /* ---- Commercial terms (must be honored exactly as written) ----------- */
  pricing: {
    model: "free-consult-quote-first",
    /** Short public-facing summary used on Home trust strip / Pricing page. */
    summary:
      "Free consultation. We give you a clear quote and get your approval before any paid work begins.",
    headline: "Free consultation — you approve a quote before any paid work",
  },
  refund: {
    /** Plain-English policy. FTC requires it be honored as written. */
    windowDays: 14,
    summary:
      "If a paid service is not delivered as agreed, you may request a refund within 14 days.",
    /** NOTE: This is NOT a "no fix, no fee" guarantee — do not advertise it as one. */
    noFixNoFee: false,
  },

  /* ---- Legal / governance --------------------------------------------- */
  governingLaw: "India", // registered jurisdiction of SHISHIR ALE
  arbitration: {
    enabled: true,
    optOutDays: 30,
  },

  /* ---- Deferred integration IDs (env-driven; never hardcode secrets) --- */
  integrations: {
    /** DEFERRED: JivoChat widget id. Read from NEXT_PUBLIC_JIVOCHAT_ID at build. */
    jivoChatId: process.env.NEXT_PUBLIC_JIVOCHAT_ID ?? null,
    /** DEFERRED: GA4 measurement id, e.g. "G-XXXXXXX". */
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? null,
    /** DEFERRED: Google Ads conversion id, e.g. "AW-XXXXXXX". */
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? null,
    /** DEFERRED: Google Ads conversion label for the lead event. */
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? null,
  },
} as const;

export type SiteConfig = typeof siteConfig;

/* -------------------------------------------------------------------------- */
/*  Required legal disclosures (reused verbatim across pages)                  */
/* -------------------------------------------------------------------------- */

/** Printer brands referenced nominatively (plain text only — never OEM logos). */
export const OEM_BRANDS = [
  "HP",
  "Canon",
  "Epson",
  "Brother",
  "Lexmark",
  "Dell",
  "Samsung",
  "Xerox",
] as const;

/**
 * The independent-provider disclosure. Required above the fold on landing pages,
 * in the footer of every page, and on Terms/Disclaimer. Wording is fixed by the brief.
 */
export const INDEPENDENCE_DISCLOSURE = `${siteConfig.brandDisplay} is an independent third-party technical support provider. We are not affiliated with, endorsed by, or sponsored by HP, Canon, Epson, Brother, or any printer manufacturer. Brand names and trademarks are the property of their respective owners and are used for identification purposes only.`;

/** Short one-line version for tight footers / sticky bars. */
export const INDEPENDENCE_DISCLOSURE_SHORT = `Independent third-party support provider — not affiliated with or endorsed by any printer manufacturer.`;
