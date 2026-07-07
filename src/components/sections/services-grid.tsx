import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { services } from "@/config/nav";
import { serviceIcons } from "@/components/illustrations/service-icons";

export function ServicesGrid({
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
          eyebrow="How we can help"
          title="Printer help for the most common problems"
          description="Pick what's going on and we'll show you clear steps — with live help available whenever you want it."
          className="mb-12"
        />
      )}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.href];
          return (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {Icon && <Icon />}
                <h3 className="text-xl font-semibold text-foreground">{service.label}</h3>
                <p className="text-base text-muted-foreground">{service.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 font-medium text-primary">
                  See the steps
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
