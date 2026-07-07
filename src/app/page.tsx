import { HomeHero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FaqSection, type Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { professionalServiceSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

const homeFaqs: Faq[] = [
  {
    question: "Are you affiliated with my printer's manufacturer?",
    answer:
      "No. Printer Help Hub is an independent third-party support provider. We are not affiliated with, endorsed by, or sponsored by HP, Canon, Epson, Brother, or any manufacturer. We use brand names only to describe the printers we can help with.",
  },
  {
    question: "How much does help cost?",
    answer:
      "Talking through your problem is free. If a paid service is the right next step, we give you a clear quote first and only proceed once you approve it. If a paid service isn't delivered as agreed, you can request a refund within 14 days.",
  },
  {
    question: "What kinds of printer problems do you help with?",
    answer:
      "Common ones: setting up a new printer, connecting to WiFi, fixing a printer that shows as offline, installing the right driver, and sorting out print-quality issues, paper jams, and error codes — across most brands, on Windows and Mac.",
  },
  {
    question: "Do I have to buy anything to get help?",
    answer:
      "No. Our step-by-step guides are free to read and often solve the problem on their own. Live chat with our team is also free — support is there if you want it, never forced.",
  },
  {
    question: "When can I reach a real person?",
    answer: `Our team is available ${siteConfig.hours.label}. You can start a chat any time and we'll respond during those hours.`,
  },
  {
    question: "Will you access my computer?",
    answer:
      "Only if you ask us to and give clear permission first. We'll always explain what we'd do and why before anything happens. We never take control of your device without your consent.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      <HomeHero />
      <TrustStrip />
      <ServicesGrid tone="default" />
      <HowItWorks tone="muted" />
      <FaqSection
        faqs={homeFaqs}
        description="Straight answers about who we are, what help costs, and how we work."
      />
      <CtaBand />
    </>
  );
}
