import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

/** Vertical rhythm wrapper for a page section. */
export function Section({
  id,
  className,
  containerClassName,
  tone = "default",
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "primary";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20",
        tone === "muted" && "bg-secondary/40",
        tone === "primary" && "bg-primary text-primary-foreground",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading + description block. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      )}
      <Tag className={cn(Tag === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl")}>
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "measure text-lg text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
