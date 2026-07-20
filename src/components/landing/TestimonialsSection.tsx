"use client";

import useTestimonials from "@/hook/testimonials/useTestimonials";
import TestimonialsCard from "../testimonials/TestimonialsCard";
import TestimonialsCardSkeleton from "../testimonials/TestimonialsCardSkeleton";
import type { TestimonialsData } from "@/types/testimonials";

interface TestimonialsSectionProps {
  initialData?: TestimonialsData;
}

export default function TestimonialsSection({
  initialData,
}: TestimonialsSectionProps) {
  const { data, isLoading, isError, error } = useTestimonials(initialData);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-bg-page py-20 md:py-28"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-black tracking-tight text-text-heading sm:text-4xl lg:text-5xl"
          >
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-body md:text-lg">
            Trusted by businesses and brands to deliver creative work that
            drives real results.
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <TestimonialsCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load testimonials."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No testimonials available.</p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {data.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
