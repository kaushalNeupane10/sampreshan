import type { MetadataRoute } from "next";
import { isMaintenanceMode } from "@/lib/maintenance";

const siteUrl = "https://sampreshan.com";

export default function robots(): MetadataRoute.Robots {
  if (isMaintenanceMode()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
