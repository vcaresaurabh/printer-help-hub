import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/seo";

export type Faq = { question: string; answer: string };

/**
 * Accessible FAQ using native <details>/<summary> — keyboard operable and works
 * without JavaScript (good for the audience, LCP, and static export). Emits FAQPage JSON-LD.
 */
export function FaqSection({
  faqs,
  heading = true,
  eyebrow = "Questions & answers",
  title = "Frequently asked questions",
  description,
  tone = "default",
  withSchema = true,
}: {
  faqs: Faq[];
  heading?: boolean;
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
  tone?: "default" | "muted";
  withSchema?: boolean;
}) {
  return (
    <Section tone={tone}>
      {heading && (
        <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-10" />
      )}
      <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.question} className="group px-6">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
              <span>{f.question}</span>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="-mt-1 pb-5 text-base text-muted-foreground">
              <p>{f.answer}</p>
            </div>
          </details>
        ))}
      </div>
      {withSchema && <JsonLd data={faqPageSchema(faqs)} />}
    </Section>
  );
}
