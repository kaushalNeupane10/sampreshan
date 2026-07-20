import BrandShowcase from "@/components/landing/BrandShowCase";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata, createWebPageJsonLd } from "@/lib/seo";
import { getLogos } from "@/services/logos.service";
import { getPortfolio } from "@/services/portfolio.service";
import { getService } from "@/services/services.service";
import { gettestimonials } from "@/services/testimonials.service";

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

export const revalidate = 300;

async function loadHomePageData() {
  const [services, portfolio, logos, testimonials] = await Promise.allSettled([
    getService(),
    getPortfolio(),
    getLogos(),
    gettestimonials(),
  ]);

  return {
    services: services.status === "fulfilled" ? services.value : undefined,
    portfolio: portfolio.status === "fulfilled" ? portfolio.value : undefined,
    logos: logos.status === "fulfilled" ? logos.value : undefined,
    testimonials:
      testimonials.status === "fulfilled" ? testimonials.value : undefined,
  };
}

export default async function Page() {
  const homePageData = await loadHomePageData();
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`;

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
      contentUrl: `${siteConfig.url}/logo/Sampresan.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    slogan: "Creative and technology partner",
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    hasMap: mapUrl,
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
      areaServed: "NP",
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
    inLanguage: "en-NP",
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#services`,
    name: "Sampreshan Media services",
    itemListElement: siteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteConfig.url}/#service-${index + 1}`,
        name: service.name,
        description: service.description,
        url: `${siteConfig.url}/#services-heading`,
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
      <ServicesSection initialData={homePageData.services} />
      <PortfolioSection initialData={homePageData.portfolio} />
      <BrandShowcase initialData={homePageData.logos} />
      <TestimonialsSection initialData={homePageData.testimonials} />
    </>
  );
}
