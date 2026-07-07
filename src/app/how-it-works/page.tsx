import { PageHeader } from "@/components/layout/page-header";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PricingTransparency } from "@/components/sections/pricing-transparency";
import { FaqSection, type Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "How It Works",
  description:
    "A simple, no-pressure process: free consultation, a clear quote you approve first, then step-by-step help. See exactly how our printer support works.",
  path: "/how-it-works/",
});

const faqs: Faq[] = [
  {
    question: "Is the first conversation really free?",
    answer:
      "Yes. Describing your problem and getting our initial guidance costs nothing, and there's no obligation to buy anything afterward.",
  },
  {
    question: "How do you decide the price for paid work?",
    answer:
      "It depends on the specific issue and what's involved in fixing it. We look at your situation, then give you a clear quote before any paid work starts. You approve it first.",
  },
  {
    question: "What if I change my mind?",
    answer:
      "You can stop at any point before approving paid work, at no cost. If a paid service has already been done but wasn't delivered as agreed, you can request a refund within 14 days.",
  },
  {
    question: "When can I reach you?",
    answer: `Our team is available ${siteConfig.hours.label}.`,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works/" },
        ]}
        title="How our printer help works"
        lead="Three simple steps, at your pace, with the cost explained before any paid work. No pressure and no surprises."
      />
      <HowItWorks heading={false} />
      <PricingTransparency tone="muted" />
      <FaqSection faqs={faqs} tone="default" />
      <CtaBand />
    </>
  );
}
