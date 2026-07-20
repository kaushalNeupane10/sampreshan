"use client";

import StudioCard from "@/components/studio/StudioCard";
import StudioCardSkeleton from "@/components/studio/StudioCardSkeleton";
import useStudio from "@/hook/studio/useStudio";

export default function StudioProjects() {
  const { data, isLoading, isError, error } = useStudio();

  return (
    <section className="bg-bg-page" aria-labelledby="studio-projects-heading">
      <div className="container-custom px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <h2
            id="studio-projects-heading"
            className="text-3xl font-black tracking-tight text-text-heading sm:text-4xl lg:text-5xl"
          >
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

        <div className="mt-12 lg:mt-16">
          {isLoading && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <StudioCardSkeleton key={index} />
              ))}
            </div>
          )}

          {!isLoading && isError && (
            <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface px-6 text-center">
              <p className="text-text-muted">
                {error?.message || "Unable to load studio videos."}
              </p>
            </div>
          )}

          {!isLoading && !isError && (!data || data.length === 0) && (
            <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface px-6 text-center">
              <p className="text-text-muted">No studio videos available.</p>
            </div>
          )}

          {!isLoading && !isError && data && data.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
              {data.map((studio) => (
                <StudioCard key={studio.id} studio={studio} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
