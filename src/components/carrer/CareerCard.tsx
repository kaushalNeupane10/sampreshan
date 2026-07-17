import Link from "next/link";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Careers } from "@/types/career";

interface CareerCardProps {
  career: Careers;
}

export default function CareerCard({ career }: CareerCardProps) {
  // Format the application deadline for crisp presentation
  const formattedDeadline = new Date(
    career.application_deadline,
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-bg-surface p-6 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 md:p-8">
      {/* Semantic Full-Card Action Overlay Link */}
      <Link
        href={`/careers/${career.slug}`}
        className="absolute inset-0 z-20 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        aria-label={`Apply for the ${career.title} position`}
      />

      <div>
        {/* 1. Upper Meta Information Row */}
        <div className="mb-5 flex flex-wrap gap-2 items-center justify-between">
          {/* Department Label */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-subtle/20 px-3 py-1 text-[10px] font-bold tracking-wider text-brand uppercase border border-brand/10">
            <Briefcase size={12} />
            {career.department}
          </span>

          {/* Employment Classification Badge */}
          <span className="inline-flex items-center rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase border border-white/10">
            {career.employment_type_display}
          </span>
        </div>

        {/* 2. Headline Title & Description Layout Area */}
        <h3 className="bg-linear-to-r from-brand via-purple-500 to-accent bg-clip-text text-transparent text-xl font-bold tracking-tight group-hover:brightness-110 transition-all duration-300">
          {career.title}
        </h3>

        <p className="text-pretty mt-3 text-sm leading-relaxed text-text-body line-clamp-3">
          {career.short_description}
        </p>
      </div>

      {/* 3. Footer Operations Row */}
      <div className="mt-8 pt-5 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Geographic Location & Deadline Block Meta Layout */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-text-body/80">
          {/* Location Vector Layout */}
          <span className="flex items-center gap-1 capitalize">
            <MapPin size={14} className="text-neutral-400 shrink-0" />
            {career.location}
          </span>

          {/* Calendar Date Deadline */}
          <span className="flex items-center gap-1">
            <Calendar size={14} className="text-neutral-400 shrink-0" />
            <span>Deadline: {formattedDeadline}</span>
          </span>
        </div>

        {/* Action Button Element Visual Wrapper */}
        <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-bg-page px-4 py-2 text-xs font-semibold text-text-heading transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white self-end sm:self-auto relative z-30 pointer-events-none">
          <span>Apply Now</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
}
