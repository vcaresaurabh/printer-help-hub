import type { GuideContent } from "./types";
import data from "./guides.data.json";

/**
 * Guide content, generated and compliance-edited via the content workflow, then
 * decoded/cleaned into ./guides.data.json. Order controls display + sitemap order.
 */
export const guideContent = data as unknown as GuideContent[];

export const getGuide = (slug: string) => guideContent.find((g) => g.slug === slug);
export const guideSlugs = () => guideContent.map((g) => g.slug);
