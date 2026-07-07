import Link from "next/link";
import { CircleCheck, Lightbulb, ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section, SectionHeading } from "@/components/sections/section";
import { FaqSection } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { ChatButton } from "@/components/chat/chat-button";
import { ButtonLink } from "@/components/ui/button-link";
import { serviceIcons } from "@/components/illustrations/service-icons";
import { services as navServices } from "@/config/nav";
import { serviceHref, guideHref, guideMeta, type ServiceContent } from "@/content/types";

export function ServicePage({ service }: { service: ServiceContent }) {
  const href = serviceHref(service.slug);
  const Icon = serviceIcons[href];
  const navLabel = navServices.find((s) => s.href === href)?.label ?? service.h1;

  // Find a guide that pairs with this service (for internal linking, both directions).
  const relatedGuideSlug = Object.entries(guideMeta).find(
    ([, m]) => m.serviceSlug === service.slug,
  )?.[0];

  return (
    <>
      {/* Hero */}
      <div className="border-b border-border bg-secondary/40">
        <Container className="py-8 sm:py-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services/" },
              { name: navLabel, path: href },
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold sm:text-5xl">{service.h1}</h1>
              <p className="measure text-xl text-muted-foreground">{service.heroSummary}</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <ChatButton size="xl">Get live help</ChatButton>
                {relatedGuideSlug && (
                  <ButtonLink href={guideHref(relatedGuideSlug)} variant="outline" size="xl">
                    Read the free guide
                  </ButtonLink>
                )}
              </div>
            </div>
            {Icon && (
              <div className="hidden size-40 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-sm lg:flex">
                <Icon className="size-24" />
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Intro + symptoms */}
      <Section className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="measure lg:col-span-2">
            {service.intro.split(/\n\n+/).map((para, i) => (
              <p key={i} className="mb-4 text-lg text-foreground/90">
                {para}
              </p>
            ))}
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What you might be seeing</h2>
            <ul className="mt-4 space-y-3">
              {service.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-base text-muted-foreground">
                  <CircleCheck aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Causes */}
      <Section tone="muted" className="py-14 sm:py-16">
        <SectionHeading
          align="left"
          eyebrow="Why it happens"
          title="Common causes"
          className="mb-8"
        />
        <ul className="grid gap-5 sm:grid-cols-2">
          {service.causes.map((c) => (
            <li key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{c.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Step-by-step fixes */}
      <Section className="py-14 sm:py-16">
        <SectionHeading
          align="left"
          eyebrow="Try this first"
          title="Step-by-step fixes you can do yourself"
          description="Work through these in order. There's no need to buy anything — many printers are back to normal by the end of this list."
          className="mb-10"
        />
        <ol className="flex flex-col gap-5">
          {service.steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-base text-foreground/90">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* When to get help — calm callout, no pressure */}
      <Section tone="muted" className="py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-2xl border border-warm/40 bg-warm/10 p-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-warm/25 px-3 py-1 text-sm font-semibold text-warm-foreground">
            <Lightbulb aria-hidden="true" className="size-4" />
            When to ask for a hand
          </span>
          <p className="text-lg text-foreground/90">{service.whenToGetHelp}</p>
          <ChatButton size="xl">Talk with our team</ChatButton>
        </div>
      </Section>

      {/* Related guide + service cross-link */}
      {relatedGuideSlug && (
        <Section className="py-12">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <BookOpen aria-hidden="true" className="mt-1 size-7 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Prefer a printable walkthrough?</h2>
                <p className="mt-1 text-base text-muted-foreground">
                  Our free guide covers this step by step: {guideMeta[relatedGuideSlug].title}.
                </p>
              </div>
            </div>
            <Link
              href={guideHref(relatedGuideSlug)}
              className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline"
            >
              Read the guide
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <FaqSection
        tone="muted"
        faqs={service.faqs}
        title="Frequently asked questions"
        description="Honest answers about this problem and how we can help."
      />

      <CtaBand />
    </>
  );
}
