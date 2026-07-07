import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SITE_URL } from "@/lib/seo";
import { SkipLink } from "@/components/layout/skip-link";
import { DisclosureBar } from "@/components/layout/disclosure-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ConsentModeScript } from "@/components/consent/consent-mode-script";
import { ConsentManager } from "@/components/consent/consent-manager";

/** Self-hosted at build time by next/font (no runtime Google Fonts request). */
const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.brandDisplay} — Independent Printer Setup & Support Help`,
    template: `%s · ${siteConfig.brandDisplay}`,
  },
  description:
    "Friendly, independent help setting up and fixing printers. Step-by-step guides plus live support from a US-hours team. Not affiliated with any manufacturer.",
  applicationName: siteConfig.brandDisplay,
  authors: [{ name: siteConfig.legalEntity }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.brandDisplay,
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-dvh">
        <ConsentModeScript />
        <SkipLink />
        <DisclosureBar />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
