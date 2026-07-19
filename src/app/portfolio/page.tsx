import PortfolioSection from "@/components/landing/PortfolioSection";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Creative, Video, and Digital Portfolio";
const description =
  "Explore Sampreshan Media projects across branding, campaign design, video production, motion graphics, websites, mobile apps, and backend systems.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/portfolio",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...createWebPageJsonLd({ title, description, path: "/portfolio" }),
            "@type": "CollectionPage",
          },
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <PortfolioHero />
      <PortfolioSection />
    </>
  );
}
