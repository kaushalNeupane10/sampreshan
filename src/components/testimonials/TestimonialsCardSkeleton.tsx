import React from "react";

interface TestimonialsCardSkeletonProps {
  /**
   * The number of skeletons to map inside the layout structure.
   * @default 1
   */
  count?: number;
}

export default function TestimonialsCardSkeleton({
  count = 1,
}: TestimonialsCardSkeletonProps) {
  const cards = Array.from({ length: count });

  return (
    <>
      {cards.map((_, index) => (
        <article
          key={index}
          className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-bg-surface p-6 shadow-sm md:p-8"
          aria-hidden="true"
        >
          {/* Hardware-Accelerated Shimmer Wave Sweep */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />

          <div>
            {/* Stars Row Placeholder */}
            <div className="mb-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <div
                  key={starIndex}
                  className="h-4 w-4 rounded bg-border-strong/40"
                />
              ))}
            </div>

            {/* Quote Lines Placeholder Layout */}
            <div className="space-y-2.5">
              <div className="h-4 w-full rounded bg-border/70" />
              <div className="h-4 w-[98%] rounded bg-border/70" />
              <div className="h-4 w-[95%] rounded bg-border/70" />
              <div className="h-4 w-[40%] rounded bg-border/50" />
            </div>
          </div>

          {/* Footer Metadata Placement Holder */}
          <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between gap-4">
            {/* Person Profile Placeholder */}
            <div className="flex items-center gap-3.5">
              {/* Profile Avatar Frame */}
              <div className="h-12 w-12 rounded-full bg-border-strong/40 shrink-0" />
              {/* Name & Job lines */}
              <div className="space-y-2">
                <div className="h-3 w-28 rounded bg-border-strong/50" />
                <div className="h-2.5 w-20 rounded bg-border/70" />
              </div>
            </div>

            {/* Corporate Branding Placeholders */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Logo Frame Box */}
              <div className="h-9 w-20 rounded-lg bg-border-strong/30" />
              {/* Action Circle Placeholder */}
              <div className="h-9 w-9 rounded-xl bg-border-strong/30" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
