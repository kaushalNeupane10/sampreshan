import CareerSection from "@/components/carrer/CareerSection";
import CareerHeroSection from "@/components/carrer/CarrerHeroSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Creative and Technology Careers in Nepal";
const description =
  "Explore creative, marketing, video, software, and technology career opportunities with Sampreshan Media in Bharatpur, Nepal.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/careers",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...createWebPageJsonLd({ title, description, path: "/careers" }),
            "@type": "CollectionPage",
          },
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />
      <CareerHeroSection />
      <CareerSection />
    </>
  );
}
