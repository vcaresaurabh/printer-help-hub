import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/layout/prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { LEGAL_EFFECTIVE_DATE } from "@/config/legal";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Printer Help Hub collects, uses, and shares personal information, plus your California (CCPA/CPRA) privacy rights and how to exercise them.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ]}
        title="Privacy Policy"
        lead={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
      />
      <Section>
        <Container className="px-0">
          <div className="mx-auto max-w-3xl">
            <Prose>
              <p>
                This Privacy Policy explains how <strong>{siteConfig.legalEntity}</strong>, operating
                the website <strong>{siteConfig.brandDisplay}</strong> ({siteConfig.domain}) (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;), collects, uses, and shares personal information when you
                visit our website or contact us for support. We are an independent third-party
                technical-support provider and are not affiliated with any printer manufacturer.
              </p>
              <p>
                We serve customers in the United States, and this policy is written with U.S. privacy
                law in mind, including the California Consumer Privacy Act as amended by the California
                Privacy Rights Act (&ldquo;CCPA/CPRA&rdquo;). A short section for visitors outside the U.S.
                appears near the end.
              </p>

              <h2>Information we collect</h2>
              <p>Depending on how you interact with us, we may collect the following categories:</p>
              <ul>
                <li>
                  <strong>Identifiers and contact details</strong> you provide, such as your name,
                  email address, and phone number (for example, when you start a chat or email us).
                </li>
                <li>
                  <strong>Support information</strong> you share, such as a description of your printer
                  problem and the contents of chat conversations or emails.
                </li>
                <li>
                  <strong>Internet and device activity</strong> collected automatically, such as your
                  IP address, browser and device type, pages viewed, and analytics identifiers set by
                  cookies (only after you consent).
                </li>
              </ul>
              <p>
                We do not intentionally collect sensitive personal information (such as government IDs,
                financial account numbers, or health data) through this website, and we ask that you
                not send it to us.
              </p>

              <h2>How we use information</h2>
              <ul>
                <li>To respond to your questions and provide the support you request.</li>
                <li>To prepare a quote and, if you approve it, to deliver a paid service.</li>
                <li>To operate, maintain, and improve our website.</li>
                <li>To measure website performance and, with your consent, advertising effectiveness.</li>
                <li>To comply with law and to protect our rights and the safety of others.</li>
              </ul>

              <h2>How we share information</h2>
              <p>
                We do not sell your personal information for money. We share limited information with
                service providers who help us operate, including:
              </p>
              <ul>
                <li>
                  <strong>JivoChat</strong> — powers our live-chat feature and processes the messages
                  and contact details you submit through it.
                </li>
                <li>
                  <strong>Google Analytics and Google Ads</strong> — help us understand website usage
                  and, where you consent, measure advertising. These tools load only after you accept
                  cookies.
                </li>
              </ul>
              <p>
                Our use of advertising and analytics cookies may be considered a &ldquo;sale&rdquo; or
                &ldquo;sharing&rdquo; of personal information under California law, because it can involve
                cross-context behavioral advertising. You can opt out at any time using our{" "}
                <Link href="/do-not-sell/">Do Not Sell or Share My Personal Information</Link> page and
                by declining cookies in our consent banner.
              </p>

              <h2>Cookies and your choices</h2>
              <p>
                When you first visit, we ask for your cookie choice. Analytics and advertising cookies
                are set to <strong>denied</strong> by default and load only if you select &ldquo;Accept.&rdquo;
                We use Google Consent Mode so these preferences are respected. You can change your mind
                at any time by clearing cookies or using the Do Not Sell or Share link.
              </p>

              <h2>Data retention</h2>
              <p>
                We keep personal information only as long as needed for the purposes described above —
                for example, to answer your question, deliver a service you approved, keep basic
                records, and meet legal obligations — after which we delete or de-identify it.
              </p>

              <h2>Your California privacy rights</h2>
              <p>If you are a California resident, you have the right to:</p>
              <ul>
                <li><strong>Know</strong> what personal information we collect, use, and share.</li>
                <li><strong>Access</strong> a copy of the personal information we hold about you.</li>
                <li><strong>Delete</strong> personal information we collected from you.</li>
                <li><strong>Correct</strong> inaccurate personal information.</li>
                <li>
                  <strong>Opt out</strong> of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal
                  information (see the <Link href="/do-not-sell/">Do Not Sell or Share</Link> page).
                </li>
                <li>
                  <strong>Not be discriminated against</strong> for exercising your rights — we will
                  not deny service or charge you more.
                </li>
              </ul>
              <p>
                To make a request, email us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We may need to verify
                your identity before responding, and you may use an authorized agent. We aim to respond
                within the timeframes required by law.
              </p>

              <h2>Text messages and calls</h2>
              <p>
                If you give us your phone number, you agree that we may contact you about your support
                request. We do not add you to marketing calling lists without your separate consent,
                and you can ask us to stop contacting you at any time.
              </p>

              <h2>Visitors outside the United States</h2>
              <p>
                Our services are directed to U.S. users. If you access the website from outside the
                U.S., you may have rights under your local law (for example, the EU/UK GDPR), including
                the right to access, correct, delete, or object to certain processing of your personal
                information. To exercise any such right, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Please note your
                information may be processed in countries other than your own.
              </p>

              <h2>Children&apos;s privacy</h2>
              <p>
                This website is intended for adults and is not directed to children under 16. We do not
                knowingly collect personal information from children. If you believe a child has
                provided us information, please contact us and we will delete it.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will revise the effective
                date above. Significant changes will be reflected on this page.
              </p>

              <h2>Contact us</h2>
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
