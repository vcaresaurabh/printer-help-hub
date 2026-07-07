"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Static-site contact form: composes a mailto: message (no server, no data leaves the
 * browser until the user sends the email themselves). Includes a TCPA-style consent
 * notice beside the optional phone field.
 */
const fieldClass =
  "min-h-12 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Printer support request${name ? ` from ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "Phone: (not provided)",
      "",
      "How can we help?",
      message,
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-medium">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-medium">
          Phone number <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-describedby="phone-consent"
        />
        <p id="phone-consent" className="text-sm text-muted-foreground">
          By providing your number you agree to be contacted about your support request. We won&apos;t
          add you to marketing calls.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-medium">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" size="xl" className="w-full sm:w-auto">
        Send your message
      </Button>
      <p className="text-sm text-muted-foreground">
        This opens your email app with the details filled in. Prefer to write directly? Email{" "}
        <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline underline-offset-4">
          {siteConfig.email}
        </a>
        .
      </p>
    </form>
  );
}
