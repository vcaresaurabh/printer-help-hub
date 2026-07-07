import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/layout/prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, INDEPENDENCE_DISCLOSURE } from "@/config/site";
import { LEGAL_EFFECTIVE_DATE } from "@/config/legal";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of Printer Help Hub and our independent third-party printer support services, including dispute resolution.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms/" },
        ]}
        title="Terms of Service"
        lead={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
      />
      <Section>
        <Container className="px-0">
          <div className="mx-auto max-w-3xl">
            <Prose>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the{" "}
                {siteConfig.brandDisplay} website ({siteConfig.domain}) and the support services
                provided by <strong>{siteConfig.legalEntity}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;). By using our website or services, you agree to these Terms. If you do
                not agree, please do not use the website or services.
              </p>

              <h2>Independent third-party status</h2>
              <p>{INDEPENDENCE_DISCLOSURE}</p>

              <h2>Our services</h2>
              <p>
                We provide independent technical guidance and support for common printer issues, such
                as setup, wireless connection, offline errors, driver installation, and print-quality
                problems. Support is offered through free educational guides and, when you choose, live
                chat or other agreed channels. The initial consultation is free. If a paid service is
                appropriate, we will describe it and give you a quote before any paid work begins, and
                we will proceed only after you approve it.
              </p>

              <h2>No guarantee of a fix</h2>
              <p>
                We use reasonable care and skill, but technology issues vary and some problems are
                caused by hardware faults, third-party software, or manufacturer limitations outside
                our control. We therefore do not and cannot guarantee that every issue will be
                resolved. We will tell you honestly if we believe a problem is beyond what we can help
                with.
              </p>

              <h2>Your responsibilities</h2>
              <ul>
                <li>Provide accurate information about your printer and the problem.</li>
                <li>Back up important files before making significant changes to your device.</li>
                <li>
                  Grant access to your device only if and when you choose; we will never take control
                  of your device without your clear, informed consent.
                </li>
                <li>Use our website and services only for lawful purposes.</li>
              </ul>

              <h2>Pricing, payment, and refunds</h2>
              <p>
                Consultations are free. Fees for any paid service are quoted and approved in advance.
                Our refund and cancellation terms are set out in our{" "}
                <Link href="/refund-policy/">Refund &amp; Cancellation Policy</Link>, which forms part
                of these Terms.
              </p>

              <h2>Intellectual property and trademarks</h2>
              <p>
                Website content, including original text and illustrations, belongs to us or our
                licensors. Printer brand names and trademarks referenced on the website are the
                property of their respective owners and are used only to describe the products we can
                help with. Their use does not imply any affiliation or endorsement. See our{" "}
                <Link href="/disclaimer/">Disclaimer</Link> for details.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, we are not liable for any indirect, incidental,
                special, or consequential damages, or for loss of data, arising from your use of the
                website or services. Where liability cannot be excluded, our total liability for any
                claim is limited to the amount you paid us for the specific service giving rise to the
                claim. Nothing in these Terms limits any rights you have under applicable consumer
                protection law that cannot lawfully be limited.
              </p>

              <h2>Governing law</h2>
              <p>
                These Terms are governed by the laws of <strong>India</strong>, where {siteConfig.legalEntity}{" "}
                is registered, without regard to conflict-of-laws principles. This does not deprive you
                of the protection of mandatory consumer laws of your place of residence.
              </p>

              <h2>Dispute resolution and arbitration</h2>
              <p>
                Most concerns can be resolved quickly by contacting us first at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. If a dispute cannot be
                resolved informally, you and we agree that it will be finally settled by binding
                arbitration on an individual basis, rather than in court, and that you and we each waive
                the right to participate in a class action. This does not prevent either party from
                seeking relief in small-claims court where available.
              </p>
              <p>
                <strong>Your right to opt out.</strong> You may opt out of this arbitration and
                class-action-waiver agreement by emailing{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> within{" "}
                <strong>{siteConfig.arbitration.optOutDays} days</strong> of first accepting these Terms,
                stating your name and that you wish to opt out of arbitration. Opting out will not
                affect any other part of these Terms.
              </p>

              <h2>Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. We will revise the effective date above
                when we do. Continued use of the website after changes take effect means you accept the
                updated Terms.
              </p>

              <h2>Contact</h2>
              <p>
                {siteConfig.legalEntity}
                <br />
                {siteConfig.address.oneLine}
                <br />
                Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </Prose>
          </div>
        </Container>
      </Section>
    </>
  );
}
