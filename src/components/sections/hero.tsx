import { Container } from "@/components/layout/container";
import { HeroScene } from "@/components/illustrations/scenes";
import { ChatButton } from "@/components/chat/chat-button";
import { ButtonLink } from "@/components/ui/button-link";
import { CircleCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const points = [
  "Free consultation — no obligation",
  "We explain the cost before any paid work",
  `Live help ${siteConfig.hours.shortLabel}`,
];

export function HomeHero() {
  return (
    <div className="bg-gradient-to-b from-secondary/50 to-background">
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <p className="inline-flex items-center rounded-full bg-warm/20 px-3 py-1 text-sm font-semibold text-warm-foreground">
            Independent printer help you can trust
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-[3.4rem]">
            Printer trouble? We&apos;ll walk you through it — calmly.
          </h1>
          <p className="measure text-xl text-muted-foreground">
            Friendly, plain-English help to set up, connect, and fix your printer. Start with our
            free step-by-step guides, or talk with a real person when you want a hand.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ChatButton size="xl">Start a live chat</ChatButton>
            <ButtonLink href="/guides/" variant="outline" size="xl">
              Browse free guides
            </ButtonLink>
          </div>

          <ul className="mt-2 flex flex-col gap-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-base text-foreground">
                <CircleCheck aria-hidden="true" className="size-5 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroScene />
        </div>
      </Container>
    </div>
  );
}
