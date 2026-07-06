import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/landing/hero.jpeg"
          alt="Creative agency workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-(--overlay)" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[rgba(0,35,149,0.92)] via-[rgba(0,35,149,0.72)] to-[rgba(0,0,0,0.35)]" />

      <div className="container-custom">
        <div className="flex min-h-[90svh] items-center py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Heading */}

            <h1 className="mt-6 text-balance text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              We Build
              <span className="text-accent"> Brands,</span>
              <br />
              Create Digital Experiences
              <br />
              That Grow Businesses.
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              From professional graphic design and cinematic video production to
              digital marketing campaigns and modern web development, we help
              businesses stand out, engage audiences, and achieve measurable
              growth.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-accent-dark"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-(--color-brand)"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
              <div>
                <p className="text-3xl font-black text-white">100+</p>
                <p className="mt-2 text-sm text-white/75">Projects Delivered</p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">50+</p>
                <p className="mt-2 text-sm text-white/75">Happy Clients</p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">5+</p>
                <p className="mt-2 text-sm text-white/75">Years Experience</p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">24/7</p>
                <p className="mt-2 text-sm text-white/75">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
