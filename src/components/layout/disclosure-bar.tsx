import Link from "next/link";
import { Container } from "./container";
import { INDEPENDENCE_DISCLOSURE_SHORT } from "@/config/site";

/**
 * Slim, always-above-the-fold independent-provider disclosure (Google Ads
 * third-party-support requirement A1). Full disclosure also appears in the footer
 * and on the Disclaimer/Terms pages.
 */
export function DisclosureBar() {
  return (
    <div className="border-b border-border bg-secondary text-secondary-foreground">
      <Container className="flex items-center justify-center gap-2 py-2 text-center text-sm">
        <p>
          {INDEPENDENCE_DISCLOSURE_SHORT}{" "}
          <Link href="/disclaimer/" className="font-medium underline underline-offset-2 hover:text-primary">
            Learn more
          </Link>
        </p>
      </Container>
    </div>
  );
}
