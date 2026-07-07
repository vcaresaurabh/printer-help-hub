import { cn } from "@/lib/utils";

/**
 * Larger original scene illustrations (flat/duotone, semantic tokens). Decorative,
 * so aria-hidden. Built from primitive shapes — no stock art, no OEM renders.
 */

/** Hero: a calm printer producing a page, with WiFi arcs and a friendly help bubble. */
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
    >
      {/* soft background blobs */}
      <ellipse cx="230" cy="180" rx="180" ry="150" className="fill-secondary" />
      <circle cx="88" cy="86" r="46" className="fill-warm/25" />

      {/* WiFi arcs */}
      <g strokeLinecap="round" fill="none">
        <path d="M300 96 a46 46 0 0 1 40 22" className="stroke-warm" strokeWidth="5" />
        <path d="M308 78 a70 70 0 0 1 62 30" className="stroke-warm/60" strokeWidth="5" />
      </g>

      {/* Printed page rising out of the printer */}
      <g>
        <rect x="150" y="70" width="120" height="150" rx="8" className="fill-card stroke-primary" strokeWidth="3" />
        <line x1="172" y1="104" x2="248" y2="104" className="stroke-warm" strokeWidth="6" strokeLinecap="round" />
        <line x1="172" y1="126" x2="240" y2="126" className="stroke-primary/35" strokeWidth="6" strokeLinecap="round" />
        <line x1="172" y1="148" x2="248" y2="148" className="stroke-primary/35" strokeWidth="6" strokeLinecap="round" />
        <line x1="172" y1="170" x2="222" y2="170" className="stroke-primary/35" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Printer body */}
      <rect x="120" y="200" width="180" height="96" rx="16" className="fill-primary" />
      <rect x="150" y="252" width="120" height="52" rx="8" className="fill-card" />
      <line x1="166" y1="272" x2="254" y2="272" className="stroke-primary/25" strokeWidth="4" strokeLinecap="round" />
      <line x1="166" y1="286" x2="230" y2="286" className="stroke-primary/25" strokeWidth="4" strokeLinecap="round" />
      <circle cx="140" cy="222" r="6" className="fill-warm" />
      <rect x="158" y="216" width="60" height="10" rx="5" className="fill-primary-foreground/30" />

      {/* Friendly "help" speech bubble */}
      <g>
        <rect x="286" y="176" width="96" height="72" rx="16" className="fill-warm" />
        <path d="M300 246 l-2 22 20 -14z" className="fill-warm" />
        <circle cx="316" cy="212" r="6" className="fill-warm-foreground" />
        <circle cx="334" cy="212" r="6" className="fill-warm-foreground" />
        <circle cx="352" cy="212" r="6" className="fill-warm-foreground" />
      </g>
    </svg>
  );
}

/** Support person with a headset — abstract, no brand, for How-It-Works / Contact. */
export function SupportAgentScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-auto w-full", className)}
    >
      <circle cx="120" cy="120" r="112" className="fill-secondary" />
      {/* shoulders */}
      <path d="M56 214 a64 64 0 0 1 128 0z" className="fill-primary" />
      {/* head */}
      <circle cx="120" cy="108" r="46" className="fill-card stroke-primary" strokeWidth="4" />
      {/* headset band + mic */}
      <path d="M78 108 a42 42 0 0 1 84 0" className="stroke-primary" strokeWidth="6" fill="none" strokeLinecap="round" />
      <rect x="72" y="104" width="12" height="20" rx="6" className="fill-warm" />
      <rect x="156" y="104" width="12" height="20" rx="6" className="fill-warm" />
      <path d="M162 122 v10 a26 26 0 0 1 -24 22" className="stroke-warm" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="132" cy="156" r="6" className="fill-warm" />
      {/* friendly smile */}
      <path d="M104 118 a18 14 0 0 0 32 0" className="stroke-primary" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="106" cy="100" r="3.4" className="fill-primary" />
      <circle cx="134" cy="100" r="3.4" className="fill-primary" />
    </svg>
  );
}
