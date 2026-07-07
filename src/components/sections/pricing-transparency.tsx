import { CircleCheck } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { siteConfig } from "@/config/site";

const points = [
  {
    title: "Free consultation",
    body: "Tell us what's happening and we'll help figure it out — at no cost, and with no obligation to buy anything.",
  },
  {
    title: "A clear quote first",
    body: "If paid work is the right next step, we explain what it involves and what it costs before we begin. The price depends on the specific issue, and you'll always see it upfront.",
  },
  {
    title: "You approve before we start",
    body: "Nothing is charged until you say yes. Prefer to follow our free guides on your own instead? That's completely fine.",
  },
  {
    title: `Refund within ${siteConfig.refund.windowDays} days`,
    body: "If a paid service isn't delivered as agreed, you can request a refund within 14 days. We keep our terms plain and honor them as written.",
  },
] as const;

export function PricingTransparency({
  heading = true,
  tone = "default",
}: {
  heading?: boolean;
  tone?: "default" | "muted";
}) {
  return (
    <Section tone={tone}>
      {heading && (
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, honest pricing"
          description="No subscriptions, no pressure, and no surprise charges. Here's exactly how it works."
          className="mb-12"
        />
      )}
      <ul className="grid gap-5 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <CircleCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-base text-muted-foreground">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="measure mx-auto mt-8 text-center text-base text-muted-foreground">
        Because every printer problem is a little different, we don&apos;t list one-size-fits-all
        prices. Instead, we quote your specific job upfront so you always know the cost before
        deciding.
      </p>
    </Section>
  );
}
