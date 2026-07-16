interface BrandLogoCardSkeletonProps {
  /**
   * The number of logo skeletons to render.
   * @default 1
   */
  count?: number;
}

export default function BrandLogoCardSkeleton({
  count = 1,
}: BrandLogoCardSkeletonProps) {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <div key={index} className="flex justify-center" aria-hidden="true">
          <div className="relative flex flex-col items-center">
            {/* 1. Responsive Logo Circle Container */}
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-surface shadow-sm transition-all duration-300 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
              {/* Premium Shimmer Overlay Layer */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

              {/* Responsive Inner Logo Mock Element */}
              <div className="h-8 w-8 rounded-full bg-bg-sunken sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            </div>

            {/* 2. Layout Stability Spacer 
                Your real component reveals a tooltip *above* the card on hover/focus 
                rather than rendering static inline text. This hidden spacer keeps 
                layout shifts perfectly static between hydration states.
            */}
            <div className="mt-3 h-3 w-16 opacity-0 sm:w-20 md:w-24" />
          </div>
        </div>
      ))}
    </>
  );
}
