import BrandShowcase from "@/components/landing/BrandShowCase";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata, createWebPageJsonLd } from "@/lib/seo";

const title = "Creative and Technology Agency in Nepal";
const description = siteConfig.description;

export const metadata = {
  ...createPageMetadata({
    title,
    description,
    path: "/",
  }),
  title: {
    absolute: `${title} | ${siteConfig.name}`,
  },
};

export default function Page() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo/Sampresan.png`,
    },
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...siteConfig.geo,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      availableLanguage: ["English", "Nepali"],
    },
    sameAs: [...siteConfig.socialLinks],
    knowsAbout: siteConfig.services.map((service) => service.name),
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sampreshan Media services",
    itemListElement: siteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: "Nepal",
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd,
          websiteJsonLd,
          createWebPageJsonLd({ title, description, path: "/" }),
          servicesJsonLd,
        ]}
      />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BrandShowcase />
      <TestimonialsSection />
    </>
  );
}
