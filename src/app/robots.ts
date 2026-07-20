import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { isMaintenanceMode } from "@/lib/maintenance";

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
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
