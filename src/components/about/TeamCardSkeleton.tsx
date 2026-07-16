import React from "react";

interface TeamCardSkeletonProps {
  /**
   * The number of team skeletons to render in your grid layout.
   * @default 1
   */
  count?: number;
}

export default function TeamCardSkeleton({ count = 1 }: TeamCardSkeletonProps) {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <article
          key={index}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-elevated p-6 text-center shadow-md md:p-8"
          aria-hidden="true"
        >
          {/* Hardware-Accelerated Shimmer Wave Effect Overlay */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />

          {/* 1. Ghost Floating Metadata Badges */}
          <div className="absolute top-4 left-4 right-4 z-10 flex justify-between gap-2 pointer-events-none">
            {/* Business Area Badge Placeholder */}
            <div className="h-5 w-24 rounded-full bg-border-strong/40" />

            {/* Leadership Status Indicator Placeholder */}
            <div className="h-5 w-14 rounded-full bg-border/60" />
          </div>

          {/* 2. Avatar Placeholder Layout */}
          <div className="relative mx-auto mt-4 mb-6 h-28 w-28 shrink-0 rounded-full border-2 border-border-subtle bg-bg-sunken flex items-center justify-center">
            {/* Ghost inner image circle */}
            <div className="h-24 w-24 rounded-full bg-border/40" />
          </div>

          {/* 3. Identity Block Placeholders */}
          <div className="mb-4 flex flex-col items-center">
            {/* Name Heading Block */}
            <div className="h-6 w-36 rounded-md bg-border-strong/60" />

            {/* Job Title Stack Lines (Min-height alignment preserved) */}
            <div className="mt-2.5 space-y-1.5 w-full flex flex-col items-center min-h-[2rem]">
              <div className="h-3.5 w-4/5 rounded bg-border/70" />
              <div className="h-3.5 w-1/2 rounded bg-border/50" />
            </div>
          </div>

          {/* 4. Bio Block Placeholders */}
          <div className="flex-1 space-y-2.5 flex flex-col items-center w-full">
            <div className="h-4 w-full rounded bg-border/70" />
            <div className="h-4 w-[94%] rounded bg-border/70" />
            <div className="h-4 w-[88%] rounded bg-border/70" />
            <div className="h-4 w-[60%] rounded bg-border/50" />
          </div>

          {/* 5. Social Actions Row Placeholder */}
          <div className="mt-6 flex justify-center gap-3 pt-4 border-t border-border-subtle">
            {/* LinkedIn Icon Frame */}
            <div className="h-9 w-9 rounded-xl border border-border bg-bg-page flex items-center justify-center">
              <div className="h-4 w-4 rounded-xs bg-border/60" />
            </div>
            {/* Website Icon Frame */}
            <div className="h-9 w-9 rounded-xl border border-border bg-bg-page flex items-center justify-center">
              <div className="h-4 w-4 rounded-xs bg-border/60" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
