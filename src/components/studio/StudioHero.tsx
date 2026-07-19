import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Film, Play } from "lucide-react";

export default function StudioHero() {
  return (
    <section
      aria-labelledby="studio-hero-title"
      className="relative isolate overflow-hidden bg-neutral-950 pt-16 sm:pt-18 lg:pt-20"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/video/studioHero.mp4" type="video/mp4" />
      </video>

      {/* Layered scrims keep the video legible without a washed-out bottom blur. */}
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-neutral-950/90 via-brand-950/70 to-neutral-950/45" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/15 via-transparent to-black/50" />

      <div className="container-custom px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100svh-4rem)] items-center py-14 sm:min-h-[calc(100svh-4.5rem)] sm:py-18 lg:min-h-[calc(100svh-5rem)] lg:py-24">
          <div className="w-full max-w-4xl">
            {/* Heading */}
            <h1
              id="studio-hero-title"
              className="text-balance text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[1.08] text-white"
            >
              Bring Your
              <span className="block text-accent">Story to Life</span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/85 sm:mt-8 sm:text-lg sm:leading-8">
              From concept development and cinematic filming to professional
              editing and final delivery, our studio creates high-quality videos
              that elevate brands, products, businesses, and personal stories.
              Every frame is crafted with creativity, precision, and modern
              production techniques.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 min-[380px]:gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark"
              >
                Book a Studio Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Our Work
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-12 grid max-w-3xl grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:mt-14 sm:gap-4">
              <div className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm sm:p-5">
                <Camera className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-black text-white sm:text-3xl">
                  250+
                </p>
                <p className="mt-1 text-sm leading-5 text-white/70">
                  Commercial Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm sm:p-5">
                <Film className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-black text-white sm:text-3xl">4K</p>
                <p className="mt-1 text-sm leading-5 text-white/70">
                  Professional Video Production
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm sm:p-5">
                <Clapperboard className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-black text-white sm:text-3xl">
                  24/7
                </p>
                <p className="mt-1 text-sm leading-5 text-white/70">
                  Editing & Post Production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A restrained edge fade keeps the video-to-page transition clean. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3 bg-linear-to-b from-transparent to-bg-page sm:h-4" />
    </section>
  );
}
