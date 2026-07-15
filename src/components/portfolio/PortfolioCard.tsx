import Image from "next/image";
import Link from "next/link";

import { Portfolio } from "@/types/portfolio";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-brand">
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-sunken">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width:640px) 100vw,
         (max-width:1024px) 50vw,
         33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
            {portfolio.category_name}
          </span>
        </div>

        <div className="absolute right-5 bottom-5">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-heading backdrop-blur">
            {portfolio.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <p className="text-sm font-medium text-brand">
            {portfolio.client_name}
          </p>

          <h3 className="mt-1 text-xl font-bold leading-tight text-text-heading transition-colors duration-300 group-hover:text-brand">
            {portfolio.title}
          </h3>
        </div>

        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-text-body">
          {portfolio.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              portfolio.is_studio_project
                ? "bg-brand-subtle text-brand"
                : "bg-accent-subtle text-accent-dark"
            }`}
          >
            {portfolio.is_studio_project ? "Studio Project" : "Client Project"}
          </span>

          {portfolio.url && (
            <Link
              href={portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              View Project →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
