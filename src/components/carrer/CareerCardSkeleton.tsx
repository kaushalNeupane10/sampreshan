import React from "react";

interface CareerCardSkeletonProps {
  /**
   * The count of skeleton items to build into your responsive view grids.
   * @default 1
   */
  count?: number;
}

export default function CareerCardSkeleton({
  count = 1,
}: CareerCardSkeletonProps) {
  const cards = Array.from({ length: count });

  return (
    <>
      {cards.map((_, index) => (
        <article
          key={index}
          className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-bg-surface p-6 shadow-sm md:p-8"
          aria-hidden="true"
        >
          {/* Hardware-Accelerated Shimmer Wave Sweep Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />

          <div>
            {/* Top Badges Meta Row Placeholder */}
            <div className="mb-5 flex items-center justify-between gap-2">
              <div className="h-5 w-28 rounded-full bg-brand-subtle/30" />
              <div className="h-5 w-16 rounded-full bg-border-strong/40" />
            </div>

            {/* Title Line Placeholder */}
            <div className="h-6 w-2/3 rounded-md bg-border-strong/60" />

            {/* Paragraph Text Short Description Lines */}
            <div className="mt-4 space-y-2.5">
              <div className="h-3.5 w-full rounded bg-border/70" />
              <div className="h-3.5 w-[92%] rounded bg-border/70" />
            </div>
          </div>

          {/* Bottom Controls Execution Area Placeholder */}
          <div className="mt-8 pt-5 border-t border-border-subtle flex items-end sm:items-center justify-between gap-4">
            {/* Geographic & Timeline Info Blocks Placeholders */}
            <div className="flex gap-4">
              {/* Location Tag Shape */}
              <div className="h-4 w-16 rounded bg-border/60" />
              {/* Deadline Tag Shape */}
              <div className="h-4 w-32 rounded bg-border/60" />
            </div>

            {/* Button Component Visual Shape Frame */}
            <div className="h-8 w-24 rounded-xl bg-border-strong/30 shrink-0 hidden sm:block" />
          </div>
        </article>
      ))}
    </>
  );
}
