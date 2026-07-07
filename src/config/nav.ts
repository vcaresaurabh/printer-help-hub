/**
 * Navigation + sitemap structure. Single source of truth for the header nav,
 * footer link columns, breadcrumbs, and sitemap.xml generation.
 *
 * All hrefs use a trailing slash to match `trailingSlash: true` in next.config.ts.
 */

export type NavItem = {
  label: string;
  href: string;
  /** Short description used on hub pages / mega-menus. */
  description?: string;
};

/** Primary services (each gets a dedicated page under /services/). */
export const services: NavItem[] = [
  {
    label: "New Printer Setup",
    href: "/services/printer-setup/",
    description: "Unbox, connect, and install a brand-new printer step by step.",
  },
  {
    label: "Wireless / WiFi Setup",
    href: "/services/wireless-printer-setup/",
    description: "Connect your printer to WiFi and keep it from dropping off.",
  },
  {
    label: "Printer Offline Fix",
    href: "/services/printer-offline-fix/",
    description: "Get a printer that shows “offline” back to printing.",
  },
  {
    label: "Driver Installation",
    href: "/services/driver-installation/",
    description: "Find, download, and install the correct printer driver.",
  },
  {
    label: "Print Quality & Errors",
    href: "/services/print-quality-issues/",
    description: "Fix streaks, faded prints, paper jams, and error codes.",
  },
];

/** Header primary navigation. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Guides", href: "/guides/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** Footer legal/policy links. */
export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms/" },
  { label: "Refund & Cancellation", href: "/refund-policy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Accessibility", href: "/accessibility/" },
  { label: "Do Not Sell or Share My Personal Information", href: "/do-not-sell/" },
];

/** All indexable routes, used to generate sitemap.xml. Guides/services expand from data in Phase 3/4. */
export const staticRoutes: string[] = [
  "/",
  "/services/",
  "/how-it-works/",
  "/guides/",
  "/pricing/",
  "/about/",
  "/contact/",
  ...services.map((s) => s.href),
  ...legalNav.map((l) => l.href),
];
