import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.76",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
