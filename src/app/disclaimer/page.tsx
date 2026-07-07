import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/layout/prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, INDEPENDENCE_DISCLOSURE, OEM_BRANDS } from "@/config/site";
import { LEGAL_EFFECTIVE_DATE } from "@/config/legal";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Trademark and independence disclaimer for Printer Help Hub. We are not affiliated with any printer manufacturer; results are not guaranteed.",
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer/" },
        ]}
        title="Disclaimer"
        lead={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
      />
      <Section>
        <Container className="px-0">
          <div className="mx-auto max-w-3xl">
            <Prose>
              <h2>Independent third-party provider</h2>
              <p>{INDEPENDENCE_DISCLOSURE}</p>

              <h2>Trademarks</h2>
              <p>
                All product names, brand names, logos, and trademarks mentioned on this website are the
                property of their respective owners. This includes, but is not limited to,{" "}
                {OEM_BRANDS.join(", ")}. These names are used on this website only in a descriptive,
                nominative sense — to identify the printers and products we can help with. Their use
                does not imply any affiliation with, sponsorship by, endorsement by, or authorization
                from those companies.
              </p>
              <p>
                We do not use manufacturer logos, official product imagery, or any branding designed to
                suggest we are an official or authorized representative of any manufacturer. We are not.
              </p>

              <h2>Results are not guaranteed</h2>
              <p>
                The information and support provided on this website are offered in good faith and for
                general help. Because printer problems can stem from hardware faults, third-party
                software, or manufacturer limitations outside our control, we do not guarantee that any
                particular issue will be resolved. You are responsible for backing up your data before
                making significant changes to your device.
              </p>

              <h2>No professional or manufacturer advice</h2>
              <p>
                Content on this website is general guidance and is not a substitute for the
                manufacturer&apos;s official documentation or warranty service. For warranty questions,
                please contact your printer&apos;s manufacturer directly.
              </p>

              <h2>External links</h2>
              <p>
                Our website may reference or link to third-party websites (for example, a
                manufacturer&apos;s official download page). We are not responsible for the content or
                practices of those websites.
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
