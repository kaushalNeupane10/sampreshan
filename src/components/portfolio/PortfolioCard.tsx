import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { Portfolio } from "@/types/portfolio";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  // Determine the primary clickable destination
  const cardTargetUrl = portfolio.url || "#";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:border-brand hover:shadow-brand">
      {/* 1. Main Semantic Link Block covering the card */}
      <Link
        href={cardTargetUrl}
        target={portfolio.url ? "_blank" : undefined}
        rel={portfolio.url ? "noopener noreferrer" : undefined}
        className="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        aria-label={`View details for ${portfolio.title}`}
      />

      {/* 2. Image Wrapper Section */}
      <div className="relative aspect-16/10 overflow-hidden bg-sunken">
        {portfolio.image ? (
          <Image
            src={portfolio.image}
            alt={portfolio.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-brand-950 to-neutral-900 text-white/70">
            <ImageIcon className="h-9 w-9" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Project preview
            </span>
          </div>
        )}

        {/* Ambient Overlay for UI Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Dynamic Category Badge (Top-Left) */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center rounded-full bg-brand px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-foreground shadow-sm">
            {portfolio.category_name}
          </span>
        </div>

        {/* Dynamic Year Badge (Bottom-Right) */}
        <div className="absolute right-4 bottom-4 z-20">
          <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold tracking-wider text-text-heading backdrop-blur-sm shadow-sm">
            {portfolio.year}
          </span>
        </div>
      </div>

      {/* 3. Typography & Metadata Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3">
          <p className="text-xs font-bold tracking-widest text-brand uppercase">
            {portfolio.client_name || "Client project"}
          </p>

          <h3 className="text-pretty mt-1 text-xl font-bold leading-snug text-text-heading transition-colors duration-300 group-hover:text-brand">
            {portfolio.title}
          </h3>
        </div>

        {/* Clamped Description Body */}
        <p className="text-pretty line-clamp-3 flex-1 text-sm leading-relaxed text-text-body">
          {portfolio.description}
        </p>

        {/* 4. Action & Status Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
              portfolio.is_studio_project
                ? "bg-brand-subtle text-brand"
                : "bg-accent-subtle text-accent-dark"
            }`}
          >
            {portfolio.is_studio_project ? "Studio Project" : "Client Project"}
          </span>

          {portfolio.url && (
            <div className="pointer-events-none relative z-20 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors group-hover:text-brand-light">
              <span>View Project</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
