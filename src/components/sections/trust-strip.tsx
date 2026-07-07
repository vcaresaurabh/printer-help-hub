import { Handshake, HandCoins, Clock, BookOpen } from "lucide-react";
import { Section } from "./section";
import { siteConfig } from "@/config/site";

/** Value/process cards — VERIFIED FACTS ONLY (no ratings, counts, or testimonials). */
const values = [
  {
    icon: Handshake,
    title: "Independent & upfront",
    body: "We're an independent support provider, not a manufacturer. We tell you plainly what we're doing and why.",
  },
  {
    icon: HandCoins,
    title: "Free consultation",
    body: "Talking through your problem costs nothing. You approve a clear quote before any paid work begins.",
  },
  {
    icon: Clock,
    title: "US-hours support",
    body: `Reach a real person ${siteConfig.hours.label}. No robots pressuring you, ever.`,
  },
  {
    icon: BookOpen,
    title: "Guides first",
    body: "Our step-by-step guides help you fix many issues yourself — no purchase required.",
  },
] as const;

export function TrustStrip() {
  return (
    <Section tone="muted" className="py-14 sm:py-16">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-base text-muted-foreground">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
