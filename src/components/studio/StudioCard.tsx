import Image from "next/image";
import Button from "@/components/ui/Button";
import { Play, ExternalLink } from "lucide-react";
import { Portfolio } from "@/types/portfolio";

interface StudioCardProps {
  studio: Portfolio;
}

export default function StudioCard({ studio }: StudioCardProps) {
  const targetUrl = studio.url || "#";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-md transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:border-brand hover:shadow-brand">
      {/* Accessible Full-Card Link Layer 
          Lowered to z-10 so it sits perfectly behind interactive elements but above backgrounds 
      */}
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        aria-label={`Watch ${studio.title} project video on external site`}
      />

      {/* 1. Video Thumbnail Preview Block */}
      <div className="relative aspect-video overflow-hidden bg-bg-sunken select-none">
        {/* Project Cover Image */}
        <Image
          src={studio?.image || studio.client_logo}
          alt={`${studio.title} preview`}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Premium Dark Scrim Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Hover-Revealed Play Bubble HUD */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex h-14 w-14 scale-95 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-brand-light">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Category Floating Tag */}
        {studio.category_name && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase border border-white/10">
              {studio.category_name}
            </span>
          </div>
        )}

        {/* Year Floating Tag */}
        {studio.year && (
          <div className="absolute bottom-4 right-4 z-10">
            <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-text-heading shadow-2xs backdrop-blur-xs">
              {studio.year}
            </span>
          </div>
        )}
      </div>
      <div className="relative z-20 pointer-events-none flex flex-1 flex-col p-6 md:p-8">
        {/* Header Block with Brand Logo */}
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg-page shadow-2xs">
            <Image
              src={studio.client_logo}
              alt={`${studio.client_name} logo`}
              width={40}
              height={40}
              className="max-h-10 max-w-10 object-contain"
              unoptimized
            />
          </div>

          <div className="min-w-0">
            <span className="text-[10px] font-bold tracking-widest text-brand uppercase block mb-0.5">
              {studio.client_name || "Client"}
            </span>
            <h3 className="text-pretty line-clamp-2 text-xl font-bold tracking-tight text-text-heading group-hover:text-brand transition-colors duration-300">
              {studio.title}
            </h3>
          </div>
        </div>

        {/* Clamped Description Body */}
        <p className="text-pretty line-clamp-4 text-sm leading-relaxed text-text-body flex-1">
          {studio.description}
        </p>

        {/* 3. Call to Action Footer Area */}
        <div className="mt-8 pt-4 border-t border-border-subtle">
          <Button
            fullWidth
            className="gap-2 py-3 font-semibold transition-all duration-300 group-hover:brightness-110"
          >
            <Play size={16} className="fill-current" />
            <span>Watch Project</span>
            <ExternalLink size={14} className="opacity-60 ml-0.5" />
          </Button>
        </div>
      </div>
    </article>
  );
}
