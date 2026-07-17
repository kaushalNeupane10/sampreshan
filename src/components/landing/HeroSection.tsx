import Link from "next/link";
import ParticleNetwork from "./PlexusBackground";

export default function HeroSection() {
  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <ParticleNetwork />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-(--overlay)" /> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-linear-to-r from-[rgba(0,35,149,0.92)] via-[rgba(0,35,149,0.72)] to-[rgba(0,0,0,0.35)]" /> */}

      <div className="container-custom px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-svh items-center py-16 sm:py-20 md:py-28">
          <div className="w-full max-w-3xl">
            {/* Heading */}

            <h1 className="text-balance break-words text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[1.12] text-white">
              We Build
              <span className="text-accent"> Brands,</span>
              <br />
              Create Digital Experiences
              <br />
              That Grow Businesses.
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/90 min-[380px]:text-base sm:mt-8 sm:text-lg sm:leading-8">
              From professional graphic design and cinematic video production to
              digital marketing campaigns and modern web development, we help
              businesses stand out, engage audiences, and achieve measurable
              growth.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 min-[380px]:gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-accent-dark sm:px-7 sm:py-4 sm:text-base"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-(--color-brand) sm:px-7 sm:py-4 sm:text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-7 border-t border-white/15 pt-7 sm:mt-16 sm:gap-6 sm:pt-8 md:grid-cols-4">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">100+</p>
                <p className="mt-2 text-sm text-white/75">Projects Delivered</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">50+</p>
                <p className="mt-2 text-sm text-white/75">Happy Clients</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">5+</p>
                <p className="mt-2 text-sm text-white/75">Years Experience</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">24/7</p>
                <p className="mt-2 text-sm text-white/75">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
