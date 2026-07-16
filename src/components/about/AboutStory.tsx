import { Target, Eye } from "lucide-react";

type StoryCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function StoryCard({ icon, title, description }: StoryCardProps) {
  return (
    <article
      className="
        group rounded-3xl
        border border-border
        bg-bg-elevated
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand/30
        hover:shadow-lg
      "
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-subtle text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-text-heading">{title}</h3>

      <p className="mt-5 text-base leading-8 text-text-body">{description}</p>
    </article>
  );
}

export default function AboutStory() {
  return (
    <>
      <section
        aria-labelledby="about-story"
        className="border-y border-border bg-bg-surface pt-20"
      >
        <div className="container-custom px-5 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          {/* Top Content */}
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            {/* Left */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Our Story
              </p>

              <h2
                id="about-story"
                className="mt-5 max-w-lg text-4xl font-bold leading-tight text-text-heading md:text-5xl"
              >
                Built to do it all —
                <br />
                well
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-xl space-y-8 text-lg leading-8 text-text-body">
              <p>
                Sampreshan Media began with a simple belief: great brands
                deserve a partner who can do it all — beautifully and
                technically — without the hand-offs and finger-pointing of
                multiple vendors.
              </p>

              <p>
                What started as a small design studio has evolved into a full
                creative and technology company. Today our multidisciplinary
                team spans branding, digital marketing, video production, web
                engineering, and IT solutions, collaborating closely to deliver
                exceptional experiences.
              </p>

              <p>
                We&apos;re proud not just of our work, but of the long-term
                relationships we&apos;ve built. Many of our clients began with a
                single project and continue to trust us as their strategic
                creative and technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-sunken">
        <div className="container-custom px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            <StoryCard
              icon={<Target size={22} strokeWidth={2} />}
              title="Our Mission"
              description="To become the trusted creative and technology partner ambitious brands rely on by combining strategic thinking, thoughtful design, innovative technology, and measurable business impact."
            />

            <StoryCard
              icon={<Eye size={22} strokeWidth={2} />}
              title="Our Vision"
              description="A future where organizations of every size have access to world-class branding, marketing, digital experiences, and technology solutions that empower sustainable growth."
            />
          </div>
        </div>
      </section>
    </>
  );
}
