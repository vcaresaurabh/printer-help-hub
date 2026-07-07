import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { ContactForm } from "@/components/contact/contact-form";
import { ChatButton } from "@/components/chat/chat-button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Printer Help Hub. Start a free live chat or send us a message. Independent printer support, available Monday–Friday, 9 AM–6 PM ET.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
        title="Contact us"
        lead="Start a free chat or send a message and we'll get back to you. There's no obligation, and the first conversation is always free."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: details */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-warm/40 bg-warm/10 p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <MessageCircle aria-hidden="true" className="size-6 text-warm-foreground" />
                The fastest way to reach us
              </h2>
              <p className="mt-2 text-base text-foreground/90">
                Live chat is the quickest option during our support hours. It&apos;s free and there&apos;s
                no obligation.
              </p>
              <ChatButton size="xl" className="mt-4">
                Start a live chat
              </ChatButton>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Business details</h2>
              <ul className="mt-4 space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">{siteConfig.legalEntity}</span>
                    <br />
                    {siteConfig.address.oneLine}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Email</span>
                    <br />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary underline underline-offset-4"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Support hours</span>
                    <br />
                    {siteConfig.hours.label}
                  </span>
                </li>
              </ul>
              <p className="mt-6 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                {siteConfig.brandDisplay} is an independent third-party support provider and is not
                affiliated with any printer manufacturer.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-base text-muted-foreground">
              Tell us a little about what&apos;s happening and we&apos;ll point you in the right
              direction.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
