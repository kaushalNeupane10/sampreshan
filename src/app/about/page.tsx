import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";
import HowWeWork from "@/components/about/HowWeWork";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "About Our Creative and Technology Team";
const description =
  "Meet our Bharatpur team combining brand strategy, design, digital marketing, video production, software engineering, and practical IT expertise.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...createWebPageJsonLd({ title, description, path: "/about" }),
            "@type": "AboutPage",
          },
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutStory />
      <HowWeWork />
      <AboutTeam />
    </>
  );
}
