import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // ── Static export for GitHub Pages ──────────────────────────────────
  output: "export",

  // Repository name becomes the base path on GitHub Pages.
  // e.g. https://<username>.github.io/iron-district/
  basePath: isProd ? "/iron-district" : "",
  assetPrefix: isProd ? "/iron-district/" : "",

  experimental: {
    // Disable Partial Prerendering so Next.js 16 doesn't try to create
    // `.segments` subdirectories (which EPERM-fail on OneDrive on Windows).
    ppr: false,
  },

  // next/image optimisation requires a server; disable it for static export.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
