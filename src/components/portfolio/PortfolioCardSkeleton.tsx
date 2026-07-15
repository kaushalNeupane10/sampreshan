export default function PortfolioCardSkeleton() {
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-sm">
        <div className="aspect-16/10 animate-pulse bg-skeleton" />

        <div className="space-y-4 p-6">
          <div className="h-4 w-24 animate-pulse rounded bg-skeleton" />

          <div className="h-6 w-3/4 animate-pulse rounded bg-skeleton" />

          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-skeleton" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-skeleton" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-skeleton" />
          </div>

          <div className="flex justify-between pt-4">
            <div className="h-8 w-28 animate-pulse rounded-full bg-skeleton" />
            <div className="h-5 w-24 animate-pulse rounded bg-skeleton" />
          </div>
        </div>
      </div>
    </>
  );
}
