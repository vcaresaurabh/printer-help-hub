import type { MetadataRoute } from "next";
import { staticRoutes } from "@/config/nav";
import { serviceSlugs } from "@/content/services";
import { guideSlugs } from "@/content/guides";
import { absoluteUrl } from "@/lib/seo";
import { serviceHref, guideHref } from "@/content/types";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(staticRoutes);
  serviceSlugs().forEach((s) => paths.add(serviceHref(s)));
  guideSlugs().forEach((s) => paths.add(guideHref(s)));

  return [...paths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") || path.startsWith("/guides") ? 0.8 : 0.6,
  }));
}
