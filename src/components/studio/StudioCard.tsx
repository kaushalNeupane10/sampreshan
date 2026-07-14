import Image from "next/image";
import Button from "@/components/ui/Button";
import { Play } from "lucide-react";
import { StudioApiResponse } from "@/types/studio";

interface StudioCardProps {
  studio: StudioApiResponse;
}

export default function StudioCard({ studio }: StudioCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-brand">
      {/* Video */}
      <div className="relative aspect-video overflow-hidden bg-bg-sunken">
        <iframe
          src={studio.videoUrl}
          title={studio.title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-base-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        {/* Brand */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border bg-bg-page">
            <Image
              src={studio.brandLogo}
              alt={`${studio.title} logo`}
              fill
              sizes="56px"
              className="object-contain p-2"
            />
          </div>

          <h3 className="line-clamp-2 text-xl font-bold text-text-heading">
            {studio.title}
          </h3>
        </div>

        {/* Description */}
        <p className="line-clamp-4 text-base leading-7 text-text-body">
          {studio.description}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-8">
          <Button fullWidth className="gap-2">
            <Play size={18} />
            Watch Project
          </Button>
        </div>
      </div>
    </article>
  );
}
