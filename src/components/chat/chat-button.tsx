"use client";

import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

declare global {
  interface Window {
    // JivoChat JS API (present only after the widget script loads, post-consent).
    jivo_api?: { open: () => void; close?: () => void };
  }
}

type ChatButtonProps = VariantProps<typeof buttonVariants> & {
  children?: React.ReactNode;
  className?: string;
  withIcon?: boolean;
};

/**
 * Accessible live-chat trigger. Opens the JivoChat widget if it is loaded
 * (user has accepted cookies and the script is present); otherwise it sends the
 * user to the Contact page so the CTA never dead-ends. No auto-open, no pop-ups.
 */
export function ChatButton({
  children = "Start a live chat",
  className,
  variant = "warm",
  size = "xl",
  withIcon = true,
}: ChatButtonProps) {
  const router = useRouter();

  function openChat() {
    if (typeof window !== "undefined" && window.jivo_api?.open) {
      window.jivo_api.open();
    } else {
      router.push("/contact/");
    }
  }

  return (
    <Button type="button" variant={variant} size={size} className={className} onClick={openChat}>
      {withIcon && <MessageCircle aria-hidden="true" />}
      {children}
    </Button>
  );
}
