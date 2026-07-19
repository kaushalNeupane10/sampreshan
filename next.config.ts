import type { NextConfig } from "next";

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: "https",
    hostname: "res.cloudinary.com",
    pathname: "/**",
  },
];

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (apiUrl) {
  try {
    const parsedApiUrl = new URL(apiUrl);
    const protocol = parsedApiUrl.protocol.replace(":", "");

    if (protocol === "http" || protocol === "https") {
      remotePatterns.push({
        protocol,
        hostname: parsedApiUrl.hostname,
        port: parsedApiUrl.port,
        pathname: "/media/**",
      });
    }
  } catch {
    // Invalid API configuration is surfaced by requests; keep image config valid.
  }
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns,
  },
};

export default nextConfig;
