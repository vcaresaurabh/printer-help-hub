import { cn } from "@/lib/utils";

/**
 * Long-form typography for policy / content pages. Styles descendant elements via
 * Tailwind arbitrary variants (no typography plugin needed). Pair with a max-w-3xl wrapper.
 */
export function Prose({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "text-lg leading-relaxed text-foreground/90",
        "[&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground",
        "[&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground",
        "[&_p]:mt-4",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2",
        "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_table]:mt-4 [&_table]:w-full [&_th]:border [&_th]:border-border [&_th]:p-2 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:p-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
