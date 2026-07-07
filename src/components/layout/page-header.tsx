import { Container } from "./container";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

/** Standard inner-page header: soft band + breadcrumbs + H1 + optional lead. */
export function PageHeader({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-border bg-secondary/40">
      <Container className="py-10 sm:py-12">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{title}</h1>
        {lead && <p className="measure mt-4 text-xl text-muted-foreground">{lead}</p>}
        {children}
      </Container>
    </div>
  );
}
