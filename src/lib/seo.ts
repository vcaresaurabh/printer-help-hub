import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Canonical origin (no trailing slash). Overridable via env for staging. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(
  /\/+$/,
  "",
);

/** Build an absolute URL for a path (paths keep their trailing slash). */
export function absoluteUrl(path = "/"): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, trailing-slashed (e.g. "/services/printer-setup/"). */
  path?: string;
  /** Policy/utility pages can opt out of indexing. */
  noindex?: boolean;
  /** When true, use the title exactly (bypass the "· Brand" template). */
  absoluteTitle?: boolean;
};

/**
 * Central metadata builder — guarantees canonical + OpenGraph + Twitter on every page.
 * `title` should already be <= 60 chars; the root layout appends the brand via template.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  noindex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.brandDisplay,
      title,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD builders (rendered via <JsonLd/>). Plain objects, no PII.         */
/* -------------------------------------------------------------------------- */

/** ProfessionalService org schema for the Home page. Phone included only if known. */
export function professionalServiceSchema() {
  const { hours, address } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.brandDisplay,
    legalName: siteConfig.legalEntity,
    url: `${SITE_URL}/`,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    description:
      "Independent third-party printer setup and troubleshooting help. Not affiliated with any printer manufacturer.",
    areaServed: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.schema.dayOfWeek,
        opens: hours.schema.opens,
        closes: hours.schema.closes,
      },
    ],
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
