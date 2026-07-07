import { Section, SectionHeading } from "./section";

export type HowStep = { title: string; body: string };

const defaultSteps: HowStep[] = [
  {
    title: "Tell us what's happening",
    body: "Start a free chat and describe the problem in your own words. There's no cost and no obligation to buy anything.",
  },
  {
    title: "We diagnose and quote",
    body: "We help pinpoint the issue and, if paid work is needed, give you a clear price first. Nothing is charged until you approve it.",
  },
  {
    title: "We help you get printing",
    body: "We guide you through the fix step by step, or handle the approved work — at a calm pace, on your schedule.",
  },
];

export function HowItWorks({
  steps = defaultSteps,
  heading = true,
  tone = "default",
}: {
  steps?: HowStep[];
  heading?: boolean;
  tone?: "default" | "muted";
}) {
  return (
    <Section tone={tone}>
      {heading && (
        <SectionHeading
          eyebrow="How it works"
          title="Simple, honest, and at your pace"
          description="No pressure and no surprises — just clear steps and a price you agree to before any paid work."
          className="mb-12"
        />
      )}
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 shadow-sm">
            <span
              aria-hidden="true"
              className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
            >
              {i + 1}
            </span>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-base text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
