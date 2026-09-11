import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fawas-portfolio",
  assetPrefix: "/fawas-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;