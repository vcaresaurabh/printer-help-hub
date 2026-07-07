import { Section } from "./section";
import { ChatButton } from "@/components/chat/chat-button";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

export function CtaBand({
  title = "Prefer to talk it through?",
  description = "Start a free chat and tell us what your printer is doing. We'll help you sort it out — calmly, and with the cost explained before any paid work.",
  primaryLabel = "Start a live chat",
  secondaryHref = "/how-it-works/",
  secondaryLabel = "See how it works",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Section tone="primary">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="measure mx-auto text-lg text-primary-foreground/90">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ChatButton size="xl">{primaryLabel}</ChatButton>
          <ButtonLink
            href={secondaryHref}
            variant="outline"
            size="xl"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            {secondaryLabel}
          </ButtonLink>
        </div>
        <p className="text-sm text-primary-foreground/80">
          Free consultation • We quote before any paid work • {siteConfig.hours.shortLabel}
        </p>
      </div>
    </Section>
  );
}
