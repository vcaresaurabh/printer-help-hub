/**
 * Renders a JSON-LD <script> for structured data. Server component; safe because
 * the data is our own trusted object (no user input) serialized to JSON.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
