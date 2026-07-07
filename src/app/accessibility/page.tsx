import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/layout/prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { LEGAL_EFFECTIVE_DATE } from "@/config/legal";

export const metadata = buildMetadata({
  title: "Accessibility Statement",
  description:
    "Printer Help Hub is committed to WCAG 2.1 AA accessibility. Learn about the measures we take and how to give feedback.",
  path: "/accessibility/",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility/" },
        ]}
        title="Accessibility Statement"
        lead={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
      />
      <Section>
        <Container className="px-0">
          <div className="mx-auto max-w-3xl">
            <Prose>
              <p>
                {siteConfig.brandDisplay} is committed to making our website usable for everyone,
                including people with disabilities. We aim to meet the{" "}
                <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>.
              </p>

              <h2>What we do</h2>
              <ul>
                <li>Use clear, semantic HTML with a logical heading structure and landmarks.</li>
                <li>Provide a &ldquo;Skip to main content&rdquo; link for keyboard users.</li>
                <li>Make all interactive elements — including the chat button — keyboard operable.</li>
                <li>Show visible focus outlines so you can see where you are on the page.</li>
                <li>Maintain strong color contrast for text and important controls.</li>
                <li>Use large, readable text (18px base) with comfortable spacing.</li>
                <li>Respect the &ldquo;reduce motion&rdquo; setting in your operating system.</li>
                <li>Label form fields and provide helpful, plain-language instructions.</li>
              </ul>

              <h2>Ongoing effort</h2>
              <p>
                Accessibility is an ongoing process. We test our pages as we build and update them, and
                we work to fix issues we find. Some features rely on third-party tools (such as our
                live-chat provider); we choose vendors with accessibility in mind, but we do not fully
                control their software.
              </p>

              <h2>Need help or found a problem?</h2>
              <p>
                If you have trouble using any part of this website, or you have a suggestion, please
                let us know and we will do our best to help and to improve. Contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We welcome your feedback.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>
    </>
  );
}
