import type { MetadataRoute } from "next";

const siteUrl = "https://sampreshan.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/studio", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/pricing", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
