interface PortfolioCardSkeletonProps {
  /**
   * The number of skeleton cards to render.
   * @default 1
   */
  count?: number;
}

export default function PortfolioCardSkeleton({
  count = 1,
}: PortfolioCardSkeletonProps) {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-sm"
          aria-hidden="true"
        >
          {/* Shimmer Effect Layer */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />

          {/* 1. Image Placeholder Section */}
          <div className="relative aspect-16/10 overflow-hidden bg-bg-sunken">
            {/* Category Badge Placeholder (Top-Left) */}
            <div className="absolute top-4 left-4 z-20">
              <div className="h-7 w-20 rounded-full bg-border-strong/60" />
            </div>

            {/* Year Badge Placeholder (Bottom-Right) */}
            <div className="absolute right-4 bottom-4 z-20">
              <div className="h-6 w-12 rounded-full bg-border-strong/40 backdrop-blur-xs" />
            </div>
          </div>

          {/* 2. Content Placeholder Section */}
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3">
              {/* Client Name Subtitle Line */}
              <div className="h-3.5 w-24 rounded bg-border-strong/50 mb-2" />

              {/* Portfolio Title */}
              <div className="space-y-1.5 mt-1">
                <div className="h-6 w-5/6 rounded bg-border-strong/70" />
                <div className="h-6 w-1/2 rounded bg-border-strong/70" />
              </div>
            </div>

            {/* Clamped Description Body Lines */}
            <div className="flex-1 space-y-2 mt-2">
              <div className="h-4 w-full rounded bg-border/80" />
              <div className="h-4 w-11/12 rounded bg-border/80" />
              <div className="h-4 w-4/5 rounded bg-border/80" />
            </div>

            {/* 3. Footer Action & Status Placeholder */}
            <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
              {/* Project Type Tag */}
              <div className="h-6 w-24 rounded-full bg-border" />

              {/* Action Link Text */}
              <div className="h-4 w-24 rounded bg-border" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
