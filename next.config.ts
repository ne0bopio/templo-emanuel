import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/site";

// Static export for GitHub Pages, served under BASE_PATH.
// When this moves to a real domain (or Vercel), set BASE_PATH = "" in lib/site.ts.
const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH || undefined,
  assetPrefix: BASE_PATH ? `${BASE_PATH}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
