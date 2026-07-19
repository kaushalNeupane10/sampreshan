import PricingPageContent from "@/components/pricing/PricingPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { pricingFaqs } from "@/data/pricingFAQ";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Creative and Technology Service Pricing";
const description =
  "Review pricing for branding, digital marketing, video production, web development, mobile apps, and integrated creative technology partnerships.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/pricing",
});

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({ title, description, path: "/pricing" }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqJsonLd,
        ]}
      />

      <section className="container-custom px-5 pt-32 pb-14 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Flexible engagement options
          </p>
          <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
            Pricing for creative and technology services
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-text-body">
            Choose a starting package or contact us for a tailored proposal.
            Final pricing depends on project scope, complexity, timeline, and
            the mix of services your team needs.
          </p>
        </div>
      </section>

      <PricingPageContent />
    </>
  );
}
