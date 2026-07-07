import React from "react";

// --- Types & Interfaces ---
interface WorkValue {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StatItem {
  id: string;
  value: string;
  label: string;
}

export default function AboutFeaturesAndStats() {
  // Content Array for "How we work"
  const values: WorkValue[] = [
    {
      id: "outcomes",
      title: "Outcomes over output",
      description:
        "We measure success by your results — pipeline, revenue, retention — not by how many deliverables we ship.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "craft",
      title: "Craft in everything",
      description:
        "From a kerned headline to a clean API, the details are the difference. We sweat them so you don't have to.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.343-3.343M9.813 15.904L5.143 14.25 3 21l6.813-5.096zm0 0L14 11.5"
          />
        </svg>
      ),
    },
    {
      id: "partnership",
      title: "True partnership",
      description:
        "We work as an extension of your team — transparent, proactive, and invested in the long game.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      id: "momentum",
      title: "Move with momentum",
      description:
        "Ambition needs speed. We ship fast without cutting the corners that matter.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
  ];

  // Content Array for "Stats Metrics"
  const stats: StatItem[] = [
    { id: "delivered", value: "250+", label: "Projects delivered" },
    { id: "clients", value: "120+", label: "Happy clients" },
    { id: "years", value: "8", label: "Years in business" },
    { id: "retention", value: "98%", label: "Client retention" },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: How We Work */}
      <section className="bg-bg-page py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-(--container-width) mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-bold tracking-wider text-brand uppercase block mb-3">
              What We Value
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-text-heading tracking-tight text-balance">
              How we work
            </h2>
          </div>

          {/* Grid Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div
                key={item.id}
                className="
                  group rounded-3xl
                  border border-border
                  bg-bg-elevated
                  p-6
                  flex flex-col justify-between
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand/30
                  hover:shadow-lg
                "
              >
                <div>
                  {/* Icon Wrapper (Matches Story Card Group Hover Effect Exactly) */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-subtle text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-text-heading mb-3">
                    {item.title}
                  </h3>

                  {/* Card Body */}
                  <p className="text-base leading-7 text-text-body text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Stats Container */}
      <section className="bg-bg-sunken py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-(--container-width) mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
