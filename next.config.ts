import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable Partial Prerendering so Next.js 16 doesn't try to create
    // `.segments` subdirectories (which EPERM-fail on OneDrive on Windows).
    ppr: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
