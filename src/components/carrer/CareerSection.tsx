"use client";

import CareerCard from "./CareerCard";
import CareerCardSkeleton from "./CareerCardSkeleton";
import useCareers from "@/hook/career/useCareers";

export default function CareerSection() {
  const { data, isLoading, isError, error } = useCareers();

  return (
    <section
      id="open-positions"
      aria-labelledby="career-heading"
      className="bg-bg-page py-20 md:py-28"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h2
            id="career-heading"
            className="text-3xl font-black tracking-tight text-text-heading sm:text-4xl lg:text-5xl"
          >
            Join Our Team
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-body md:text-lg">
            Explore our current opportunities and become part of a team
            that&apos;s passionate about creating exceptional digital
            experiences.
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="mt-14 space-y-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <CareerCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load career opportunities."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              There are no open positions at the moment.
            </p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="mt-14 space-y-6">
            {data.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
