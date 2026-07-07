import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/layout/prose";
import { OpenConsentButton } from "@/components/consent/open-consent-button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Do Not Sell or Share My Info",
  description:
    "Exercise your California right to opt out of the sale or sharing of your personal information. Review your cookie choices or send us a request.",
  path: "/do-not-sell/",
});

export default function DoNotSellPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Do Not Sell or Share", path: "/do-not-sell/" },
        ]}
        title="Do Not Sell or Share My Personal Information"
        lead="Your California privacy choice, made simple."
      />
      <Section>
        <Container className="px-0">
          <div className="mx-auto max-w-3xl">
            <Prose>
              <p>
                We do not sell your personal information for money. However, when you allow analytics
                and advertising cookies, that activity may be considered a &ldquo;sale&rdquo; or
                &ldquo;sharing&rdquo; of personal information under California law, because it can involve
                cross-context behavioral advertising. This page lets you opt out.
              </p>

              <h2>Option 1: Change your cookie choice</h2>
              <p>
                The quickest way to opt out is to decline analytics and advertising cookies. Advertising
                and analytics cookies are off by default and only turn on if you accept them. Use the
                button below to review or change your choice at any time.
              </p>
            </Prose>

            <div className="mt-6">
              <OpenConsentButton />
            </div>

            <Prose className="mt-10">
              <h2>Option 2: Send us a request</h2>
              <p>
                You can also ask us directly to opt you out and to honor your other California privacy
                rights (to know, access, correct, or delete your personal information). Email us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with the subject line
                &ldquo;California Privacy Request.&rdquo; You may use an authorized agent to submit a
                request on your behalf, and we may need to verify your identity before we act.
              </p>
              <p>
                We will not discriminate against you for exercising your privacy rights. For full
                details on how we handle personal information, see our{" "}
                <Link href="/privacy-policy/">Privacy Policy</Link>.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>
    </>
  );
}
