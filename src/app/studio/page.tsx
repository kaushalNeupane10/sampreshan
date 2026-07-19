import JsonLd from "@/components/seo/JsonLd";
import StudioHero from "@/components/studio/StudioHero";
import StudioProjects from "@/components/studio/StudioProjects";
import { siteConfig } from "@/config/siteConfig";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Video Production and Creative Studio";
const description =
  "Sampreshan Media provides scripting, filming, commercial video production, editing, motion graphics, voiceovers, and post-production in Bharatpur, Nepal.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/studio",
});

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Video Production and Post-Production",
    description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: [
      "Commercial video production",
      "Brand films",
      "Video editing",
      "Motion graphics",
      "Voiceovers",
      "Post-production",
    ],
  };

  return (
    <>
      <JsonLd
        data={[
          {
            ...createWebPageJsonLd({ title, description, path: "/studio" }),
            "@type": "CollectionPage",
          },
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Studio", path: "/studio" },
          ]),
          serviceJsonLd,
        ]}
      />
      <StudioHero />
      <StudioProjects />
    </>
  );
}
