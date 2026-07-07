import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";
import { guideContent } from "@/content/guides";
import { guideHref, serviceHref } from "@/content/types";
import { services as navServices } from "@/config/nav";

export const metadata = buildMetadata({
  title: "Printer Troubleshooting Guides",
  description:
    "Free, step-by-step printer guides: setup, WiFi, offline fixes, drivers, print quality, and paper jams. Clear help you can follow yourself.",
  path: "/guides/",
});

export default function GuidesHubPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
        ]}
        title="Free printer guides"
        lead="Plain-English, step-by-step walkthroughs for the most common printer problems. Read them anytime — no sign-up, no cost."
      />

      <Section>
        {guideContent.length === 0 ? (
          <p className="text-center text-lg text-muted-foreground">Guides are coming soon.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guideContent.map((guide) => {
              const serviceUrl = serviceHref(guide.relatedServiceSlug);
              const serviceLabel = navServices.find((s) => s.href === serviceUrl)?.label;
              return (
                <li key={guide.slug}>
                  <Link
                    href={guideHref(guide.slug)}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <BookOpen aria-hidden="true" className="size-8 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">{guide.h1}</h2>
                    <p className="text-base text-muted-foreground">{guide.metaDescription}</p>
                    {serviceLabel && (
                      <span className="text-sm font-medium text-muted-foreground">
                        Related service: {serviceLabel}
                      </span>
                    )}
                    <span className="mt-auto inline-flex items-center gap-1.5 font-medium text-primary">
                      Read the guide
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
