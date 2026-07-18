import React from "react";

interface ServiceCardSkeletonProps {
  /**
   * The number of service card loading blocks to map out.
   * @default 1
   */
  count?: number;
}

export default function ServiceCardSkeleton({
  count = 1,
}: ServiceCardSkeletonProps) {
  const cards = Array.from({ length: count });

  return (
    <>
      {cards.map((_, index) => (
        <article
          key={index}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface p-7 shadow-sm"
          aria-hidden="true"
        >
          {/* Hardware-Accelerated Shimmer Wave Sweep Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />

          {/* Top Row Elements Ghost Structure */}
          <div className="flex items-start justify-between gap-4">
            {/* Icon Block Shape */}
            <div className="h-12 w-12 shrink-0 rounded-2xl bg-border-strong/40" />

            {/* Top Right Arrow Shape Vector Wrapper */}
            <div className="h-4 w-4 rounded bg-border/60 mt-1" />
          </div>

          {/* Text/Content Loading Area Block Elements */}
          <div className="mt-8 flex flex-1 flex-col">
            {/* Service Headline Title Bar */}
            <div className="h-6 w-1/2 rounded-md bg-border-strong/60" />

            {/* Paragraph Line Items Description Block */}
            <div className="mt-4 space-y-2.5 flex-1">
              <div className="h-3.5 w-full rounded bg-border/70" />
              <div className="h-3.5 w-[94%] rounded bg-border/70" />
              <div className="h-3.5 w-[60%] rounded bg-border/50" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
