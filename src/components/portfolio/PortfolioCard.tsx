import Image from "next/image";

interface PortfolioCardProps {
  portfolio: {
    id: number;
    title: string;
    description: string;
    category: string;
    brandLogo: string;
    thumbnail: string;
  };
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand hover:shadow-brand">
      {/* Media Section */}
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-16/10">
        <Image
          src={portfolio.thumbnail}
          alt={portfolio.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={portfolio.id <= 2}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Vignette Overlay for branding visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/40 via-transparent to-transparent" />

        {/* Meta Badges */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex rounded-full bg-brand-subtle px-3 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
            {portfolio.category}
          </span>
        </div>

        {/* Floating Brand Client Logo */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/95 p-2.5 shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
            <Image
              src={portfolio.brandLogo}
              alt={`${portfolio.title} Client Logo`}
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Dynamic Content Details */}
      <div className="space-y-2 p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-text-heading transition-colors duration-300 group-hover:text-brand sm:text-xl">
          {portfolio.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-text-body">
          {portfolio.description}
        </p>
      </div>
    </article>
  );
}
