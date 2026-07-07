import Link from "next/link";
import { Lightbulb, ArrowRight, Wrench } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section, SectionHeading } from "@/components/sections/section";
import { FaqSection } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { ChatButton } from "@/components/chat/chat-button";
import { JsonLd } from "@/components/seo/json-ld";
import { howToSchema } from "@/lib/seo";
import { services as navServices } from "@/config/nav";
import { serviceHref, guideHref, type GuideContent } from "@/content/types";

export function GuidePage({ guide }: { guide: GuideContent }) {
  const serviceUrl = serviceHref(guide.relatedServiceSlug);
  const serviceLabel = navServices.find((s) => s.href === serviceUrl)?.label;

  return (
    <>
      <JsonLd
        data={howToSchema({
          name: guide.h1,
          description: guide.metaDescription,
          steps: guide.steps.map((s) => ({ name: s.name, text: s.detail })),
        })}
      />

      {/* Header */}
      <div className="border-b border-border bg-secondary/40">
        <Container className="py-8 sm:py-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Guides", path: "/guides/" },
              { name: guide.h1, path: guideHref(guide.slug) },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">{guide.h1}</h1>
          <div className="measure mt-4">
            {guide.intro.split(/\n\n+/).map((para, i) => (
              <p key={i} className="mb-3 text-xl text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </div>

      {/* Steps */}
      <Section className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="Step by step" title="Follow these steps" className="mb-8" />
            <ol className="flex flex-col gap-5">
              {guide.steps.map((step, i) => (
                <li key={step.name} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">{step.name}</h2>
                    <p className="mt-2 text-base text-foreground/90">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar: tips + related service */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24">
            {guide.tips.length > 0 && (
              <div className="rounded-2xl border border-warm/40 bg-warm/10 p-6">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Lightbulb aria-hidden="true" className="size-5 text-warm-foreground" />
                  Helpful tips
                </h2>
                <ul className="mt-3 space-y-2.5 text-base text-foreground/90">
                  {guide.tips.map((t) => (
                    <li key={t} className="list-inside list-disc">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Wrench aria-hidden="true" className="size-5 text-primary" />
                Still stuck?
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                We can walk you through it. Starting a chat is free and there&apos;s no obligation.
              </p>
              <ChatButton size="lg" className="mt-4 w-full">
                Get live help
              </ChatButton>
              {serviceLabel && (
                <Link
                  href={serviceUrl}
                  className="mt-4 inline-flex items-center gap-1.5 text-base font-medium text-primary underline-offset-4 hover:underline"
                >
                  More on {serviceLabel}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              )}
            </div>
          </aside>
        </div>
      </Section>

      {guide.faqs.length > 0 && <FaqSection tone="muted" faqs={guide.faqs} />}

      <CtaBand />
    </>
  );
}
