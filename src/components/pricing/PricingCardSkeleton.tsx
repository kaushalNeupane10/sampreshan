interface PricingCardSkeletonProps {
  /**
   * The number of pricing skeletons to render.
   * @default 1
   */
  count?: number;
}

export default function PricingCardSkeleton({
  count = 1,
}: PricingCardSkeletonProps) {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface p-6 shadow-sm md:p-8"
          aria-hidden="true"
        >
          {/* Shimmer Ambient Glow Overlay */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />

          {/* 1. Top Badges Placeholder Row */}
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Custom/Startup Tag Shape */}
            <div className="h-6 w-20 rounded-full bg-border-strong/40" />

            {/* Optional Studio Indicator Space */}
            <div className="h-4 w-12 rounded bg-border/60" />
          </div>

          {/* 2. Package Title & Description Blocks */}
          <div className="mb-6">
            {/* Plan Title (e.g., Wordpress / Custom) */}
            <div className="h-7 w-36 rounded bg-border-strong/60 md:h-8" />

            {/* Subtitle Description Blocks */}
            <div className="space-y-2 mt-3">
              <div className="h-4 w-full rounded bg-border/80" />
              <div className="h-4 w-4/5 rounded bg-border/80" />
            </div>

            {/* Price Presentation Metric Structure */}
            <div className="mt-6 flex items-end gap-2">
              <div className="flex flex-col gap-1">
                {/* Starting At Metadata Block */}
                <div className="h-3 w-14 rounded bg-border-strong/40" />
                <div className="flex items-baseline gap-1.5">
                  {/* Currency Tag Block */}
                  <div className="h-4 w-8 rounded bg-border-strong/50" />
                  {/* Big Price Figure Block */}
                  <div className="h-10 w-32 rounded bg-border-strong/70 md:h-12" />
                </div>
              </div>
              {/* Billing Cycle Duration text line */}
              <div className="h-4 w-16 rounded bg-border/60 mb-1" />
            </div>
          </div>

          {/* Core Horizontal Partition Block */}
          <div className="h-px w-full bg-border-subtle mb-6" />

          {/* 3. Features Checklist Items Loading Area */}
          <div className="flex-1 space-y-4">
            {[...Array(3)].map((_, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-3">
                {/* Check Icon Circular Frame */}
                <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-border-strong/40" />

                {/* Feature Description Contextual Lines */}
                <div className="flex-1 space-y-2">
                  <div
                    className={`h-4 rounded bg-border/80 ${itemIndex === 1 ? "w-5/6" : "w-11/12"}`}
                  />
                  {itemIndex === 0 && (
                    <div className="h-3 w-2/3 rounded bg-border/60" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 4. Action Button Placement Layer */}
          <div className="mt-8 pt-4">
            <div className="h-11 w-full rounded-xl bg-border" />
          </div>
        </div>
      ))}
    </>
  );
}
