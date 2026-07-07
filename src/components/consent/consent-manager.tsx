"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { getStoredConsent, storeConsent, grantConsentAndLoad, loadTags } from "@/lib/analytics";

/**
 * Cookie consent banner + Consent Mode v2 controller.
 * - Analytics/ads stay denied by default (see ConsentModeScript).
 * - Accept flips consent to granted and loads tags; Decline loads nothing.
 * - Equal-weight, clearly labeled buttons — no pre-checked boxes, no dark patterns.
 * - Re-openable from the Do Not Sell page via the `phh:open-consent` event.
 */
export function ConsentManager() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "accepted") loadTags();
    if (stored === null) setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener("phh:open-consent", open);
    return () => window.removeEventListener("phh:open-consent", open);
  }, []);

  function accept() {
    storeConsent("accepted");
    grantConsentAndLoad();
    setVisible(false);
  }

  function decline() {
    storeConsent("declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card shadow-[0_-4px_20px_rgb(0_0_0/0.08)]"
    >
      <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-base text-foreground/90 md:max-w-2xl">
          We use cookies to understand how our site is used and, with your permission, to measure our
          advertising. Analytics and advertising cookies stay off unless you accept. Read our{" "}
          <Link href="/privacy-policy/" className="font-medium text-primary underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <Button type="button" variant="outline" size="xl" className="min-w-32 flex-1 md:flex-none" onClick={decline}>
            Decline
          </Button>
          <Button type="button" variant="default" size="xl" className="min-w-32 flex-1 md:flex-none" onClick={accept}>
            Accept
          </Button>
        </div>
      </Container>
    </div>
  );
}
