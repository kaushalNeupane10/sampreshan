import React from "react";

interface StudioCardSkeletonProps {
  count?: number;
}

export default function StudioCardSkeleton({
  count = 1,
}: StudioCardSkeletonProps) {
  const cards = Array.from({ length: count });

  return (
    <>
      {cards.map((_, index) => (
        <article
          key={index}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-md"
          aria-hidden="true"
        >
          {/* Shimmer Ambient Glow Overlay */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

          {/* 1. Video Thumbnail Ghost Layout */}
          <div className="relative aspect-video overflow-hidden bg-bg-sunken flex items-center justify-center">
            {/* Ghost Category Floating Tag (Top Left) */}
            <div className="absolute top-4 left-4 h-5 w-24 rounded-full bg-border-strong/40" />

            {/* Ghost Year Floating Tag (Bottom Right) */}
            <div className="absolute bottom-4 right-4 h-6 w-12 rounded-full bg-border-strong/50" />

            {/* Ghost Center Play HUD Bubble */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-border-strong/30">
              <div
                className="h-5 w-5 rounded bg-border-strong/40 clip-path-play"
                style={{ clipPath: "polygon(20% 10%, 20% 90%, 85% 50%)" }}
              />
            </div>
          </div>

          {/* 2. Brand & Text Content Area Skeleton */}
          <div className="flex flex-1 flex-col p-6 md:p-8">
            {/* Header Block with Brand Logo */}
            <div className="mb-5 flex items-center gap-4">
              {/* Logo Box Container shape */}
              <div className="h-14 w-14 shrink-0 rounded-xl border border-border bg-bg-page flex items-center justify-center p-2">
                <div className="h-8 w-8 rounded bg-border/60" />
              </div>

              {/* Title Lines Metadata alignment */}
              <div className="flex-1 min-w-0 space-y-2">
                {/* Client Label metadata strip */}
                <div className="h-3 w-16 rounded bg-brand-subtle/70" />
                {/* Main Title text blocks */}
                <div className="h-5 w-11/12 rounded bg-border-strong/60" />
              </div>
            </div>

            {/* Description Lines - Multi-row alignment layout */}
            <div className="flex-1 space-y-2.5">
              <div className="h-4 w-full rounded bg-border/70" />
              <div className="h-4 w-[96%] rounded bg-border/70" />
              <div className="h-4 w-[91%] rounded bg-border/70" />
              <div className="h-4 w-[65%] rounded bg-border/50" />
            </div>

            {/* 3. Call to Action Footer Area */}
            <div className="mt-8 pt-4 border-t border-border-subtle">
              {/* Button Shape Frame */}
              <div className="h-11 w-full rounded-xl bg-border-strong/40" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
