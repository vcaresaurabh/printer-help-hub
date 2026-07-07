"use client";

import { Button } from "@/components/ui/button";

/** Re-opens the cookie consent banner so visitors can change their choice. */
export function OpenConsentButton() {
  return (
    <Button
      type="button"
      size="xl"
      onClick={() => window.dispatchEvent(new Event("phh:open-consent"))}
    >
      Review or change cookie choices
    </Button>
  );
}
