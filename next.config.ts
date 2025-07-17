import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mosaik-cms-production.up.railway.app",
        // Optional: Restrict to specific paths
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
