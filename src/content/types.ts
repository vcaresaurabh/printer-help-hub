/** Shapes for data-driven service & guide pages. Matches the content-workflow schema. */

export type QA = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSummary: string;
  intro: string;
  symptoms: string[];
  causes: { title: string; detail: string }[];
  steps: { title: string; detail: string }[];
  whenToGetHelp: string;
  faqs: QA[];
  keywords: { primary: string; secondary: string[] };
  complianceNotes?: string[];
};

export type GuideContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  steps: { name: string; detail: string }[];
  tips: string[];
  faqs: QA[];
  relatedServiceSlug: string;
  keywords: { primary: string; secondary: string[] };
  complianceNotes?: string[];
};

/** Human-facing titles for guides, keyed by slug (kept alongside nav for linking). */
export const guideMeta: Record<string, { title: string; serviceSlug: string }> = {
  "set-up-new-printer": { title: "How to Set Up a New Printer: Step by Step", serviceSlug: "printer-setup" },
  "connect-printer-to-wifi": { title: "How to Connect a Printer to WiFi", serviceSlug: "wireless-printer-setup" },
  "fix-printer-offline": { title: "Printer Says Offline? How to Fix It", serviceSlug: "printer-offline-fix" },
  "install-printer-driver": { title: "How to Install the Right Printer Driver", serviceSlug: "driver-installation" },
  "fix-print-quality": { title: "How to Fix Faded or Streaky Prints", serviceSlug: "print-quality-issues" },
  "clear-paper-jam": { title: "How to Clear a Paper Jam Safely", serviceSlug: "print-quality-issues" },
};

export const serviceHref = (slug: string) => `/services/${slug}/`;
export const guideHref = (slug: string) => `/guides/${slug}/`;
