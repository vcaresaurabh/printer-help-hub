import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "./container";
import { Logo } from "@/components/illustrations/logo";
import { services, legalNav } from "@/config/nav";
import { siteConfig, INDEPENDENCE_DISCLOSURE } from "@/config/site";

const companyNav = [
  { label: "About", href: "/about/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Guides", href: "/guides/" },
  { label: "Contact", href: "/contact/" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-foreground/85 underline-offset-4 hover:text-primary hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-card">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label={`${siteConfig.brandDisplay} — home`} className="inline-flex rounded-md">
              <Logo />
            </Link>
            <p className="mt-4 text-base text-muted-foreground">{siteConfig.tagline}.</p>
            <ul className="mt-5 space-y-3 text-base">
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  <span className="font-medium text-foreground">{siteConfig.legalEntity}</span>
                  <br />
                  {siteConfig.address.oneLine}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail aria-hidden="true" className="size-5 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="underline-offset-4 hover:text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && siteConfig.phoneHref && (
                <li className="flex items-center gap-2.5">
                  <Phone aria-hidden="true" className="size-5 shrink-0 text-primary" />
                  <a href={`tel:${siteConfig.phoneHref}`} className="underline-offset-4 hover:text-primary hover:underline">
                    {siteConfig.phone}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                <span>{siteConfig.hours.label}</span>
              </li>
            </ul>
          </div>

          <FooterColumn title="Services" links={services.map((s) => ({ label: s.label, href: s.href }))} />
          <FooterColumn title="Company" links={companyNav} />
          <FooterColumn title="Legal" links={legalNav} />
        </div>

        {/* Full independent-provider disclosure (compliance A1) */}
        <div className="mt-12 rounded-lg border border-border bg-secondary/50 p-5">
          <p className="text-sm leading-relaxed text-secondary-foreground">{INDEPENDENCE_DISCLOSURE}</p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalEntity}. All rights reserved.
          </p>
          <Link href="/do-not-sell/" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
            Do Not Sell or Share My Personal Information
          </Link>
        </div>
      </Container>
    </footer>
  );
}
