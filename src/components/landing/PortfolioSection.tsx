"use client";

import PortfolioCard from "@/components/portfolio/PortfolioCard";
import PortfolioCardSkeleton from "@/components/portfolio/PortfolioCardSkeleton";
import usePortfolio from "@/hook/portfolio/usePortfolio";

export default function PortfolioSection() {
  const { data, isLoading, isError, error } = usePortfolio();

  return (
    <section className="bg-sunken relative overflow-hidden py-20 md:py-28">
      <div className="bg-brand-subtle pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full opacity-50 blur-3xl" />
      <div className="bg-accent-subtle pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full opacity-30 blur-3xl" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-text-heading sm:text-4xl lg:text-5xl">
            Work That Speaks for Itself
          </h2>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {Array.from({ length: 3 }).map((_, index) => (
              <PortfolioCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load portfolio."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No portfolio projects available.</p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((portfolio) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
