import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Contact Our Creative and Technology Team";
const description =
  "Contact Sampreshan Media in Bharatpur, Nepal, to discuss branding, digital marketing, video production, web development, mobile apps, or IT solutions.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...createWebPageJsonLd({ title, description, path: "/contact" }),
            "@type": "ContactPage",
          },
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <section className="bg-bg-page py-16 md:py-20 lg:py-44">
        <div className="container-custom px-4">
          <div className="grid gap-10 lg:grid-cols-[420px_1fr] xl:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
