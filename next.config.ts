import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/training.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
