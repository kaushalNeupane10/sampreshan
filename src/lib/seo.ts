import type { Metadata } from "next";
import { siteConfig, type SitePath } from "@/config/siteConfig";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: SitePath;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      locale: "en_NP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function createWebPageJsonLd({
  title,
  description,
  path,
}: PageMetadataOptions) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    breadcrumb:
      path === "/"
        ? undefined
        : {
            "@id": `${url}/#breadcrumb`,
          },
    inLanguage: "en-NP",
  };
}

export function createBreadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: SitePath }>,
) {
  const currentPage = items[items.length - 1];
  const currentPageUrl = `${siteConfig.url}${
    currentPage.path === "/" ? "" : currentPage.path
  }`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${currentPageUrl}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
