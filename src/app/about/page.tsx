import { ShieldCheck, HandCoins, BookOpen, Wrench } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/sections/section";
import { CtaBand } from "@/components/sections/cta-band";
import { SupportAgentScene } from "@/components/illustrations/scenes";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, INDEPENDENCE_DISCLOSURE } from "@/config/site";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Printer Help Hub is an independent third-party printer support service focused on calm, honest, plain-English help. Learn who we are and how we work.",
  path: "/about/",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Independent and honest",
    body: "We're not tied to any manufacturer, so our only goal is to genuinely help you. We say what we're doing and why.",
  },
  {
    icon: HandCoins,
    title: "Transparent about cost",
    body: "The first conversation is free, and you approve a clear quote before any paid work. No surprises.",
  },
  {
    icon: BookOpen,
    title: "Teach first",
    body: "We'd rather help you fix it yourself when we can. Our free guides exist so you're never stuck waiting.",
  },
  {
    icon: Wrench,
    title: "Patient and practical",
    body: "Plain language, one step at a time, at a pace that suits you — no jargon and no pressure.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
        title="About Printer Help Hub"
        lead="Calm, honest, independent printer help — from real people who explain things clearly."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="measure">
            <p className="text-lg text-foreground/90">
              {siteConfig.brandDisplay} is an independent technical-support service operated by{" "}
              <strong>{siteConfig.legalEntity}</strong>. We help people set up, connect, and
              troubleshoot their printers without the frustration — using plain language and a patient,
              step-by-step approach.
            </p>
            <p className="mt-4 text-lg text-foreground/90">
              Printers can be genuinely confusing, and getting good help shouldn&apos;t mean pushy sales
              or scary warnings. We built this service to be the opposite of that: clear guides you can
              follow on your own, and friendly live help when you want a hand — always with the cost
              explained upfront.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <SupportAgentScene />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What we stand for" title="Our approach" className="mb-12" />
        <ul className="grid gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-base text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-7 shadow-sm">
          <h2 className="text-xl font-semibold">Our independent status</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{INDEPENDENCE_DISCLOSURE}</p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
