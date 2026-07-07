import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { PricingTransparency } from "@/components/sections/pricing-transparency";
import { FaqSection, type Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/sections/section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent printer support pricing: a free consultation, a clear quote before any paid work, and a 14-day refund policy. No subscriptions or hidden fees.",
  path: "/pricing/",
});

const faqs: Faq[] = [
  {
    question: "Do you charge a subscription or membership fee?",
    answer:
      "No. There's no subscription and no membership. You only pay for a specific service you've agreed to, after we've quoted it and you've approved it.",
  },
  {
    question: "Why don't you list fixed prices?",
    answer:
      "Printer problems vary a lot, so a single flat price would be misleading. We quote your specific job upfront instead, so the number you see is the number for your situation.",
  },
  {
    question: "Is the consultation free even if I don't buy anything?",
    answer:
      "Yes. The consultation is free whether or not you go ahead with paid work. Our step-by-step guides are also free to use on your own.",
  },
  {
    question: "What is your refund policy?",
    answer: `If a paid service isn't delivered as agreed, you can request a refund within ${siteConfig.refund.windowDays} days. Full details are on our Refund & Cancellation Policy page.`,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing/" },
        ]}
        title="Transparent pricing"
        lead="A free consultation, a clear quote you approve before any paid work, and no hidden fees. Here's the whole picture."
      />
      <PricingTransparency heading={false} />
      <Section tone="muted" className="py-12">
        <div className="measure mx-auto text-center text-base text-muted-foreground">
          <p>
            For the full terms, see our{" "}
            <Link href="/refund-policy/" className="font-medium text-primary underline underline-offset-4">
              Refund &amp; Cancellation Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms/" className="font-medium text-primary underline underline-offset-4">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </Section>
      <FaqSection faqs={faqs} />
      <CtaBand />
    </>
  );
}
