import Image from "next/image";
import { Mail, Sparkles } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#050b1e] px-6 py-12 text-white sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(51,89,255,0.26),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(255,153,0,0.16),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-8rem] -z-10 h-96 w-96 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -top-16 right-[-4rem] -z-10 h-64 w-64 rounded-full border border-accent/20"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <header className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 shadow-2xl shadow-brand/30">
            <Image
              src="/logo/Sampresan.png"
              alt="Sampreshan Media"
              fill
              preload
              sizes="48px"
              className="object-contain p-1"
            />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-white">
              Sampreshan
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
              Media
            </p>
          </div>
        </header>

        <section className="flex flex-1 items-center py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Scheduled maintenance
            </div>

            <h1 className="max-w-3xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              We&apos;re making things{" "}
              <span className="bg-linear-to-r from-brand-400 via-brand-300 to-accent bg-clip-text text-transparent">
                better.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-white/65 sm:text-lg">
              Our website is taking a short break while we improve the
              experience. We&apos;ll be back online soon. Thank you for your
              patience.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="mailto:contact@sampreshanmedia.com"
                className="inline-flex w-fit items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-brand-950 shadow-xl shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#050b1e]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact us
              </a>

              <div className="flex items-center gap-3 text-sm text-white/55">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>Our team is working on it</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sampreshan Media</p>
          <p>Creative ideas deserve a thoughtful pause.</p>
        </footer>
      </div>
    </main>
  );
}
