import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/layout/prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { LEGAL_EFFECTIVE_DATE } from "@/config/legal";

export const metadata = buildMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "Printer Help Hub's plain-English refund and cancellation policy: free consultations, quotes approved in advance, and a 14-day refund window.",
  path: "/refund-policy/",
});

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Refund & Cancellation", path: "/refund-policy/" },
        ]}
        title="Refund & Cancellation Policy"
        lead={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
      />
      <Section>
        <Container className="px-0">
          <div className="mx-auto max-w-3xl">
            <Prose>
              <p>
                We keep our terms simple and we honor them exactly as written. This policy explains
                when you can cancel and when you can request a refund from{" "}
                <strong>{siteConfig.legalEntity}</strong> (operating {siteConfig.brandDisplay}).
              </p>

              <h2>Free consultation</h2>
              <p>
                Consultations are free. Describing your problem and receiving our initial guidance
                costs nothing, and there is nothing to cancel or refund for a free consultation.
              </p>

              <h2>Quotes and approval</h2>
              <p>
                If a paid service is appropriate, we provide a clear quote first. No charge is made
                until you approve that quote. You are free to decline and to use our free guides
                instead, at no cost.
              </p>

              <h2>Canceling a paid service</h2>
              <p>
                You may cancel a paid service before work begins at no charge. If work has already
                started when you cancel, we will only charge for work actually performed up to that
                point, and we will explain any such charge clearly.
              </p>

              <h2>Refunds</h2>
              <p>
                If a paid service was not delivered as agreed, you may request a refund within{" "}
                <strong>{siteConfig.refund.windowDays} days</strong> of the service. To request a refund,
                email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with a brief
                description of what was agreed and what was not delivered. We will review your request
                promptly and, where a refund is due, process it back to your original payment method.
              </p>
              <p>
                Please note that because printer problems can be caused by hardware faults or other
                factors outside our control, we do not guarantee that every issue will be resolved (see
                our <Link href="/terms/">Terms of Service</Link>). A refund is available when the paid
                service itself was not delivered as agreed.
              </p>

              <h2>How to reach us</h2>
              <p>
                {siteConfig.legalEntity}
                <br />
                {siteConfig.address.oneLine}
                <br />
                Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <br />
                Hours: {siteConfig.hours.label}
              </p>
            </Prose>
          </div>
        </Container>
      </Section>
    </>
  );
}
