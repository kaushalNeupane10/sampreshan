import BrandLogoCard from "@/components/brand/BrandLogoCard";
import { brands } from "@/data/brandData";

export default function BrandShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-bold md:text-4xl lg:text-5xl text-text-heading">
            Brands We&apos;ve Worked With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
            We collaborate with startups, enterprises, and growing businesses to
            create high-quality creative productions, commercial videos,
            branding content, and digital experiences.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">
          {brands.map((brand) => (
            <BrandLogoCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
