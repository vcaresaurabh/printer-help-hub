"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./container";
import { Logo } from "@/components/illustrations/logo";
import { ChatButton } from "@/components/chat/chat-button";
import { AnchorButton } from "@/components/ui/button-link";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" aria-label={`${siteConfig.brandDisplay} — home`}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "inline-flex h-10 items-center rounded-md px-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    isActive(pathname, item.href) && "bg-secondary text-primary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-side CTAs (desktop) */}
        <div className="hidden items-center gap-2 lg:flex">
          {siteConfig.phone && siteConfig.phoneHref && (
            <AnchorButton href={`tel:${siteConfig.phoneHref}`} variant="outline" size="lg" className="h-11 text-base">
              <Phone aria-hidden="true" />
              {siteConfig.phone}
            </AnchorButton>
          )}
          <ChatButton size="lg" className="h-11">
            Live chat
          </ChatButton>
        </div>

        {/* Mobile toggle */}
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="size-11 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </Container>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center rounded-md px-3 text-lg font-medium text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                        isActive(pathname, item.href) && "bg-secondary text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <ChatButton size="xl" className="w-full">
                Start a live chat
              </ChatButton>
              {siteConfig.phone && siteConfig.phoneHref && (
                <AnchorButton href={`tel:${siteConfig.phoneHref}`} variant="outline" size="xl" className="w-full">
                  <Phone aria-hidden="true" />
                  Call {siteConfig.phone}
                </AnchorButton>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
