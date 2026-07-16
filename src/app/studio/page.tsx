"use client";

import StudioCard from "@/components/studio/StudioCard";
import StudioCardSkeleton from "@/components/studio/StudioCardSkeleton";
import StudioHero from "@/components/studio/StudioHero";
import useStudio from "@/hook/studio/useStudio";

export default function Page() {
  const { data, isLoading, isError, error } = useStudio();

  return (
    <>
      <StudioHero />

      <section className="container-custom pt-16 pb-8 lg:pt-20 lg:pb-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-text-heading sm:text-4xl lg:text-5xl">
            Stories Crafted Through{" "}
            <span className="bg-linear-to-r from-brand-500 via-purple-500 to-accent bg-clip-text text-transparent">
              Motion
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-body md:text-lg">
            A selection of our commercial films, brand stories, and creative
            productions—crafted to captivate audiences and elevate brands.
          </p>
        </div>
      </section>

      <section className="container-custom py-16 lg:py-24">
        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <StudioCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load studio videos."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No studio videos available.</p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {data.map((studio) => (
              <StudioCard key={studio.id} studio={studio} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
