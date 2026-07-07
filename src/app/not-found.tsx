import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ChatButton } from "@/components/chat/chat-button";
import { services } from "@/config/nav";

export default function NotFound() {
  return (
    <Container className="py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Page not found</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="measure mx-auto mt-4 text-lg text-muted-foreground">
        The page may have moved or the link may be out of date. Here are some helpful places to start
        instead.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/" size="xl">
          Go to the homepage
        </ButtonLink>
        <ButtonLink href="/guides/" variant="outline" size="xl">
          Browse free guides
        </ButtonLink>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
          >
            <span className="font-semibold">{service.label}</span>
            <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <ChatButton size="xl">Get live help</ChatButton>
      </div>
    </Container>
  );
}
