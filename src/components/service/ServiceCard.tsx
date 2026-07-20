import Link from "next/link";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Service } from "@/types/service";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Defensive fallback string for empty description blocks
  const displayDescription = service.short_description?.trim()
    ? service.short_description
    : "Explore our premium tailored solutions built around modern industry best practices.";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface p-7 transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl hover:shadow-brand/5">
      {/* Semantic Full-Card Anchor Action Link */}
      <Link
        href="/contact"
        className="absolute inset-0 z-20 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        aria-label={`Discuss a ${service.name} project with Sampreshan Media`}
      />

      {/* Top Row Grid Layout Indicator */}
      <div className="flex items-start justify-between gap-4">
        {/* Responsive Icon Container Wrapper */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-subtle text-brand transition-all duration-300 ease-out group-hover:bg-brand group-hover:text-white">
          {service.icon ? (
            <Image
              src={service.icon}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain transition-transform duration-300 group-hover:brightness-0 group-hover:invert"
            />
          ) : (
            /* Premium Fallback Vector Icon if null */
            <Lightbulb className="h-5 w-5" strokeWidth={2.2} />
          )}
        </div>

        {/* Action Vector Indicator Arrow */}
        <ArrowUpRight className="h-5 w-5 text-neutral-400 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand" />
      </div>

      {/* Core Typography Block Area */}
      <div className="mt-8 flex flex-1 flex-col">
        <h3 className="bg-linear-to-r from-brand via-purple-500 to-accent bg-clip-text text-transparent text-xl font-bold tracking-tight">
          {service.name}
        </h3>

        <p className="text-pretty mt-3 text-sm leading-relaxed text-text-body flex-1 line-clamp-3">
          {displayDescription}
        </p>
      </div>

      {/* Premium Hardware-Accelerated Interactive Bottom Strip */}
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand via-purple-500 to-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </article>
  );
}
