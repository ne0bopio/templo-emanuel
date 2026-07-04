import type { NextConfig } from "next";

// Static export for GitHub Pages, served under /templo-emanuel.
// When this moves to a real domain (or Vercel), drop basePath + assetPrefix.
const repo = "templo-emanuel";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
