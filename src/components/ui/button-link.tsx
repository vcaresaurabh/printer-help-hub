import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

type ButtonLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & { className?: string };

/** A Next <Link> styled as a button (for CTA navigation, prefetch-aware). */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type AnchorButtonProps = React.ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & { className?: string };

/** A plain <a> styled as a button — for tel:/mailto: and external links. */
export function AnchorButton({ className, variant, size, ...props }: AnchorButtonProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
