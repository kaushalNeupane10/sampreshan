import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Lightbulb,
  MapPin,
  UsersRound,
} from "lucide-react";

import careersImage from "../../../public/career/careers.jpg";

const cultureHighlights = [
  {
    icon: UsersRound,
    title: "One connected team",
    description: "Creative, media, and technology working side by side.",
  },
  {
    icon: Lightbulb,
    title: "Room to grow",
    description: "Learn, share ideas, and take ownership of meaningful work.",
  },
  {
    icon: MapPin,
    title: "Bharatpur, Nepal",
    description: "Build your career with a locally rooted, ambitious team.",
  },
] as const;

export default function CareerHeroSection() {
  return (
    <section
      aria-labelledby="careers-hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden border-b border-border bg-bg-surface px-5 pt-28 pb-14 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute -top-48 right-[-12rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-subtle blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-64 left-[-14rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-subtle blur-3xl"
      />

      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.9fr)] lg:gap-16 xl:gap-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-subtle px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              Careers at Sampreshan
            </div>

            <h1
              id="careers-hero-title"
              className="mt-6 text-balance text-[clamp(2.6rem,6vw,4.75rem)] font-black leading-[1.05] tracking-tight text-text-heading"
            >
              Do work that moves
              <span className="block text-brand">ideas forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-text-body sm:text-lg sm:leading-8">
              Join a multidisciplinary team turning thoughtful ideas into
              brands, stories, and digital products. Bring your perspective,
              sharpen your craft, and help create work that matters.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row sm:mt-10">
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-brand sm:px-7 sm:py-4 sm:text-base"
              >
                Explore open roles
                <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-bg-surface px-6 py-3.5 text-sm font-semibold text-text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand-subtle hover:text-brand sm:px-7 sm:py-4 sm:text-base"
              >
                Meet our team
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-10 grid gap-4 border-t border-border pt-7 sm:grid-cols-3 sm:mt-12">
              {cultureHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title} className="flex gap-3 sm:block">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-subtle text-brand sm:mb-3">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-heading">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rotate-2 rounded-[2.25rem] border border-brand/10 bg-brand-subtle sm:-inset-5"
            />

            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-brand/15 bg-brand-950 shadow-xl sm:rounded-[2rem]">
              <Image
                src={careersImage}
                alt="A diverse team collaborating to lift a light bulb representing a shared idea"
                fill
                preload
                sizes="(max-width: 1023px) calc(100vw - 40px), (max-width: 1279px) 45vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/85 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="max-w-sm rounded-2xl border border-white/15 bg-neutral-950/45 p-4 text-white shadow-lg backdrop-blur-md sm:p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                    Better together
                  </p>
                  <p className="mt-2 text-base font-semibold leading-6 sm:text-lg">
                    Different disciplines. Shared standards. One team.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -bottom-6 hidden rounded-2xl border border-border bg-bg-surface px-5 py-4 shadow-lg sm:block lg:-right-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                Create · Learn · Grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
