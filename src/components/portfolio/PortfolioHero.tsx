import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import PortfolioOrbit from "./PortfolioOrbit";

export default function PortfolioHero() {
  return (
    <section
      aria-labelledby="portfolio-hero-title"
      className="relative isolate overflow-hidden bg-neutral-950 pt-16 sm:pt-18 lg:pt-20"
    >
      <div className="absolute inset-0 -z-20 bg-neutral-950">
        <Image
          src="/portfolio/bg.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-r from-neutral-950/75 via-neutral-950/25 to-neutral-950/10" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-transparent to-black/40" />

      <div className="container-custom px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-10 py-16 sm:min-h-[calc(100svh-4.5rem)] sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)] lg:gap-6 lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              Our Work
            </div>

            <h1
              id="portfolio-hero-title"
              className="mt-6 text-balance text-[clamp(2.6rem,6vw,4.75rem)] font-black leading-[1.06] tracking-tight text-white"
            >
              Design. Edit. Build.
              <span className="block text-accent">Make an impact.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              From graphic identities and campaign visuals to cinematic edits,
              motion graphics, websites, mobile apps, and reliable backend
              systems—we bring design, post-production, and IT development
              together under one roof.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row sm:mt-10">
              <Link
                href="#featured-work"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark sm:px-7 sm:py-4 sm:text-base"
              >
                Explore our projects
                <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/15 sm:px-7 sm:py-4 sm:text-base"
              >
                Start a project
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm font-medium text-white/65 sm:mt-12">
              <span>Graphic & Brand Design</span>
              <span>Video Editing & Motion</span>
              <span>Web & App Development</span>
            </div>
          </div>

          <PortfolioOrbit />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-linear-to-b from-transparent to-bg-sunken" />
    </section>
  );
}
