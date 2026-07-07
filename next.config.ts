import type { NextConfig } from "next";

/**
 * Static export for Hostinger shared hosting.
 * - output: "export"   -> emits a fully static site into ./out (no server runtime, no API routes)
 * - trailingSlash      -> every route becomes /path/index.html (matches sitemap + .htaccess canonical rules)
 * - images.unoptimized -> required for static export (no Next Image optimization server)
 *
 * NOTE: `npm run build` uses webpack (not Turbopack) for maximum static-export reliability.
 * Dev still uses Turbopack for speed.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
