import { PageHeader } from "@/components/layout/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Printer Support Services",
  description:
    "Independent help for printer setup, WiFi connection, offline errors, driver installs, and print-quality problems. Free consultation, clear pricing.",
  path: "/services/",
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ]}
        title="Printer support services"
        lead="Pick the problem you're facing. Each page has clear, do-it-yourself steps — and our team is a click away if you'd rather have help."
      />
      <ServicesGrid heading={false} />
      <HowItWorks tone="muted" />
      <CtaBand />
    </>
  );
}
