export default function BrandLogoCardSkeleton() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        {/* Logo Circle */}
        <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-border bg-bg-surface shadow-sm sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
          <div className="h-8 w-8 rounded-full bg-skeleton sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
        </div>

        {/* Optional Company Name Placeholder */}
        <div className="mt-3 h-3 w-16 animate-pulse rounded-full bg-skeleton sm:w-20 md:w-24" />
      </div>
    </div>
  );
}
