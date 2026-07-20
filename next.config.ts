import type { NextConfig } from "next";

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: "https",
    hostname: "res.cloudinary.com",
    pathname: "/**",
  },
];

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
let allowLoopbackImageOptimization = false;

if (apiUrl) {
  try {
    const parsedApiUrl = new URL(apiUrl);
    const protocol = parsedApiUrl.protocol.replace(":", "");
    const loopbackHosts = new Set(["127.0.0.1", "localhost", "::1"]);

    if (protocol === "http" || protocol === "https") {
      allowLoopbackImageOptimization = loopbackHosts.has(
        parsedApiUrl.hostname,
      );

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
    // This exception is restricted to the explicitly configured API host and
    // /media path in remotePatterns. Public API hosts keep the secure default.
    dangerouslyAllowLocalIP: allowLoopbackImageOptimization,
    remotePatterns,
  },
};

export default nextConfig;
