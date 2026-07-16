import Image from "next/image";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Testimonials } from "@/types/testimonials";

interface TestimonialsCardProps {
  testimonial: Testimonials;
}

export default function TestimonialsCard({
  testimonial,
}: TestimonialsCardProps) {
  // Generate arrays for dynamic semantic star rendering
  const maxStars = 5;
  const ratingValue = Math.min(Math.max(testimonial.rating || 5, 1), maxStars);

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 md:p-8">
      {/* Decorative Quote Mark Background Graphic */}
      <div className="absolute top-6 right-6 text-brand/10 pointer-events-none group-hover:text-brand/15 transition-colors duration-300">
        <Quote size={56} className="fill-current rotate-180" />
      </div>

      <div>
        {/* 1. Dynamic Stars Rating Row */}
        <div
          className="mb-6 flex items-center gap-1"
          aria-label={`Rated ${ratingValue} out of 5 stars`}
        >
          {Array.from({ length: maxStars }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < ratingValue
                  ? "text-amber-500 fill-amber-500"
                  : "text-border"
              }`}
            />
          ))}
        </div>

        {/* 2. Scrollable / Preserve Line Breaks Text Body */}
        <blockquote className="text-pretty text-base leading-relaxed text-text-body whitespace-pre-line italic">
          &quot;{testimonial.quote}&quot;
        </blockquote>
      </div>

      {/* 3. Client Identity & Corporate Branding Footer */}
      <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left Hand: Person Profile Wrapper */}
        <div className="flex items-center gap-3.5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-bg-sunken">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.person_name} profile picture`}
              fill
              sizes="48px"
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="min-w-0">
            <h4 className="text-sm font-bold text-text-heading tracking-tight leading-tight">
              {testimonial.person_name}
            </h4>
            <p className="text-xs text-text-body/80 font-medium leading-normal">
              {testimonial.job_title}
            </p>
          </div>
        </div>

        {/* Right Hand: Corporate Logo or Live Verification Anchor */}
        <div className="flex items-center gap-3 shrink-0 self-stretch sm:self-auto justify-between sm:justify-end">
          {/* Logo Frame */}
          {testimonial.client_logo && (
            <div className="relative h-9 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-bg-page p-1.5 flex items-center justify-center">
              <Image
                src={testimonial.client_logo}
                alt={`${testimonial.company} Logo`}
                fill
                sizes="80px"
                className="object-contain p-1"
                unoptimized
              />
            </div>
          )}

          {/* Site Verification External Icon */}
          {testimonial.source_url && (
            <a
              href={testimonial.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-page text-text-body hover:border-brand hover:bg-brand-subtle/10 hover:text-brand transition-all duration-200"
              title={`Visit ${testimonial.company} website`}
              aria-label={`Visit ${testimonial.company} website`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
