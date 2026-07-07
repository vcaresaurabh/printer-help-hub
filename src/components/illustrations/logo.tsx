import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Original brand mark: a friendly printer with a sheet of paper and a small "hub"
 * connectivity node. Duotone teal + amber, flat style. No shield/checkmark and no
 * OEM-security clichés. Uses semantic color tokens so it re-themes automatically.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
      focusable="false"
    >
      {/* Sheet of paper feeding up out of the printer */}
      <rect
        x="7.5"
        y="2.5"
        width="17"
        height="13"
        rx="1.6"
        className="fill-card stroke-primary"
        strokeWidth="1.6"
      />
      <line x1="10.5" y1="7" x2="21.5" y2="7" className="stroke-warm" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10.5" y1="10.5" x2="18.5" y2="10.5" className="stroke-primary/40" strokeWidth="1.6" strokeLinecap="round" />
      {/* Printer body */}
      <rect x="3" y="14" width="26" height="13.5" rx="3" className="fill-primary" />
      {/* Front paper slot */}
      <rect x="8" y="21.5" width="16" height="4.5" rx="1.2" className="fill-card" />
      {/* Power light */}
      <circle cx="6.4" cy="17.6" r="1.1" className="fill-warm" />
      {/* Connectivity "hub" node */}
      <circle cx="25.6" cy="17.6" r="1.6" className="fill-warm" />
    </svg>
  );
}

/** Full logotype: brand mark + wordmark. Decorative mark, real text for a11y/SEO. */
export function Logo({
  className,
  markClassName,
  withText = true,
}: {
  className?: string;
  markClassName?: string;
  withText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className={markClassName} />
      {withText && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Printer&nbsp;Help&nbsp;<span className="text-primary">Hub</span>
        </span>
      )}
      {/* Screen-reader-only full brand name if text is hidden */}
      {!withText && <span className="sr-only">{siteConfig.brandDisplay}</span>}
    </span>
  );
}
