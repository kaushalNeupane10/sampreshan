"use client";

import Link from "next/link";
import { Play, ArrowRight, Film, Camera, Clapperboard } from "lucide-react";

export default function StudioHero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/studioHero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-900/75" />

      {/* Brand Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-brand/80 via-brand-dark/45 to-black/70" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-bg-page to-transparent" />

      <div className="container-custom relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Bring Your
            <span className="block bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Story To Life
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-200 sm:text-lg">
            From concept development and cinematic filming to professional
            editing and final delivery, our studio creates high-quality videos
            that elevate brands, products, businesses, and personal stories.
            Every frame is crafted with creativity, precision, and modern
            production techniques.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent-dark hover:shadow-brand"
            >
              Book a Studio Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Watch Our Work
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <Camera className="mb-4 h-7 w-7 text-accent" />
              <h3 className="text-3xl font-black text-white">250+</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Commercial Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <Film className="mb-4 h-7 w-7 text-accent" />
              <h3 className="text-3xl font-black text-white">4K</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Professional Video Production
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <Clapperboard className="mb-4 h-7 w-7 text-accent" />
              <h3 className="text-3xl font-black text-white">24/7</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Editing & Post Production
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
