"use client";

import BrandLogoCard from "@/components/brand/BrandLogoCard";
import BrandLogoCardSkeleton from "@/components/brand/BrandLogoCardSkeleton";
import useLogo from "@/hook/logos/useLogos";
import type { LogosData } from "@/types/logo";

interface BrandShowcaseProps {
  initialData?: LogosData;
}

export default function BrandShowcase({ initialData }: BrandShowcaseProps) {
  const { data, isLoading, isError, error } = useLogo(initialData);

  return (
    <section aria-labelledby="brand-showcase-heading" className="py-20 lg:py-28">
      <div className="container-custom px-5 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="brand-showcase-heading"
            className="mt-5 text-3xl font-bold text-text-heading md:text-4xl lg:text-5xl"
          >
            Brands We&apos;ve Worked With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
            We collaborate with startups, enterprises, and growing businesses to
            create high-quality creative productions, commercial videos,
            branding content, and digital experiences.
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="mt-14 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <BrandLogoCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load brand logos."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No brand logos available.</p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="mt-14 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">
            {data.map((brand) => (
              <BrandLogoCard key={brand.id} brand={brand} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
