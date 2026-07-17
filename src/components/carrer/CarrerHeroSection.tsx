import Link from "next/link";

export default function CareerHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/career/careers.jpg')",
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand/90 via-brand/70 to-black/50" />

      <div className="container-custom px-5">
        <div className="flex min-h-[85vh] items-center py-24 lg:min-h-screen">
          <div className="max-w-4xl">
            {/* Heading */}

            <h1 className="text-balance text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Build the Future
              <br />
              <span className="text-accent">With Our Amazing Team</span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Join passionate innovators, solve meaningful problems, and build
              products that impact thousands of people every day. Grow your
              career in an environment where creativity, collaboration, and
              continuous learning come first.
            </p>

            {/* CTA */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-brand transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark"
              >
                Explore Open Positions
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-bg-page to-transparent" />
    </section>
  );
}
