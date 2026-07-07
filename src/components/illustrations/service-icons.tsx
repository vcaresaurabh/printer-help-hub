import { cn } from "@/lib/utils";

/**
 * Original flat/duotone service illustrations (48×48). Decorative — each is marked
 * aria-hidden; the surrounding card supplies the accessible label. Colors come from
 * semantic tokens (primary teal + warm amber + muted), so they re-theme automatically.
 */

type IconProps = { className?: string };

const base = "h-12 w-12";

function Frame({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" className={cn(base, className)}>
      {children}
    </svg>
  );
}

/** New printer setup — printer with a "new" spark. */
export function IconPrinterSetup({ className }: IconProps) {
  return (
    <Frame className={className}>
      <rect x="8" y="6" width="24" height="16" rx="2" className="fill-card stroke-primary" strokeWidth="2" />
      <line x1="13" y1="12" x2="27" y2="12" className="stroke-primary/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="16" x2="22" y2="16" className="stroke-primary/40" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="21" width="30" height="15" rx="3" className="fill-primary" />
      <rect x="10" y="30" width="20" height="8" rx="1.5" className="fill-card" />
      <circle cx="9" cy="26" r="1.6" className="fill-warm" />
      <path d="M40 8 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6z" className="fill-warm" />
    </Frame>
  );
}

/** Wireless / WiFi — printer with signal arcs. */
export function IconWifi({ className }: IconProps) {
  return (
    <Frame className={className}>
      <path d="M24 10 a16 16 0 0 1 14 8" className="stroke-warm" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M27 15 a10 10 0 0 1 8 5" className="stroke-warm" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="27" cy="22" r="2" className="fill-warm" />
      <rect x="6" y="24" width="30" height="15" rx="3" className="fill-primary" />
      <rect x="11" y="33" width="20" height="8" rx="1.5" className="fill-card" />
      <circle cx="10" cy="29" r="1.6" className="fill-warm" />
    </Frame>
  );
}

/** Printer offline — printer with a paused/disconnected badge (calm amber, not alarming). */
export function IconOffline({ className }: IconProps) {
  return (
    <Frame className={className}>
      <rect x="6" y="8" width="24" height="15" rx="2" className="fill-card stroke-primary" strokeWidth="2" />
      <line x1="11" y1="14" x2="25" y2="14" className="stroke-primary/40" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="22" width="30" height="15" rx="3" className="fill-primary" />
      <rect x="8" y="31" width="20" height="8" rx="1.5" className="fill-card" />
      <circle cx="37" cy="14" r="8" className="fill-warm" />
      <rect x="34" y="10.5" width="1.8" height="7" rx="0.9" className="fill-warm-foreground" />
      <rect x="38" y="10.5" width="1.8" height="7" rx="0.9" className="fill-warm-foreground" />
    </Frame>
  );
}

/** Driver installation — gear with a download arrow. */
export function IconDriver({ className }: IconProps) {
  return (
    <Frame className={className}>
      <path
        d="M24 12 l2 0 1 3.2 3 1.3 3-1.2 1.5 1.5-1.2 3 1.3 3 3.2 1 0 2-3.2 1-1.3 3 1.2 3-1.5 1.5-3-1.2-3 1.3-1 3.2-2 0-1-3.2-3-1.3-3 1.2-1.5-1.5 1.2-3-1.3-3-3.2-1 0-2 3.2-1 1.3-3-1.2-3 1.5-1.5 3 1.2 3-1.3z"
        className="fill-primary"
      />
      <circle cx="26" cy="26" r="5" className="fill-card" />
      <path d="M20 38 v6 M16 40 l4 4 4-4" className="stroke-warm" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Frame>
  );
}

/** Print quality — page with an ink drop and a sparkle. */
export function IconQuality({ className }: IconProps) {
  return (
    <Frame className={className}>
      <rect x="10" y="5" width="24" height="30" rx="2.5" className="fill-card stroke-primary" strokeWidth="2" />
      <line x1="15" y1="12" x2="29" y2="12" className="stroke-primary/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="17" x2="26" y2="17" className="stroke-primary/40" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 26 c0 3 -2.4 5 -5 5 s-5 -2 -5 -5 c0 -3 5 -8 5 -8 s5 5 5 8z" className="fill-warm" />
      <path d="M39 33 l1.2 2.6 2.6 1.2 -2.6 1.2 -1.2 2.6 -1.2 -2.6 -2.6 -1.2 2.6 -1.2z" className="fill-primary" />
    </Frame>
  );
}

/** Map from service href to its illustration, for data-driven rendering. */
export const serviceIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  "/services/printer-setup/": IconPrinterSetup,
  "/services/wireless-printer-setup/": IconWifi,
  "/services/printer-offline-fix/": IconOffline,
  "/services/driver-installation/": IconDriver,
  "/services/print-quality-issues/": IconQuality,
};
