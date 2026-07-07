import type { ServiceContent } from "./types";
import data from "./services.data.json";

/**
 * Service-page content, generated and compliance-edited via the content workflow,
 * then decoded/cleaned into ./services.data.json. Order controls display + sitemap order.
 */
export const serviceContent = data as unknown as ServiceContent[];

export const getService = (slug: string) => serviceContent.find((s) => s.slug === slug);
export const serviceSlugs = () => serviceContent.map((s) => s.slug);
