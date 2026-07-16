import {
  Megaphone,
  Clapperboard,
  Palette,
  MonitorSmartphone,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    description:
      "Brand identities, marketing collateral, and visual systems that make you unmissable.",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across search, social, and email that turn attention into revenue.",
    icon: Megaphone,
  },
  {
    title: "Video Production",
    description:
      "End-to-end video — from studio capture to edit — that stops the scroll and tells your story.",
    icon: Clapperboard,
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible, API-ready websites and web apps built on a modern stack.",
    icon: MonitorSmartphone,
  },
  {
    title: "IT Solutions",
    description:
      "Cloud infrastructure, automation, and managed IT that keeps your business running.",
    icon: ServerCog,
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-bg-page py-20 md:py-28"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <h2
            id="services-heading"
            className="
              text-4xl
              font-bold
              tracking-tight
              text-text-heading
              sm:text-5xl
              lg:text-6xl
              leading-tight
            "
          >
            One team for{" "}
            <span className="bg-linear-to-r from-brand-500 via-purple-500 to-accent bg-clip-text text-transparent">
              every capability
            </span>
            <span className="text-accent">.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-text-body
            "
          >
            From brand identity to cloud infrastructure, our integrated teams
            cover the full spectrum of creative and technology work.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-border" />

        {/* Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-bg-surface
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-200
        hover:shadow-lg
      "
    >
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-brand-subtle
            text-brand
            transition-colors
            group-hover:bg-brand
            group-hover:text-white
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <ArrowUpRight
          className="
            h-5
            w-5
            text-neutral-400
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-brand
          "
        />
      </div>

      {/* Content */}
      <div className="mt-8">
        <h3
          className="
            text-xl
            font-semibold
            text-text-heading
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-base
            leading-relaxed
            text-text-body
          "
        >
          {service.description}
        </p>
      </div>

      {/* Hover Accent */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1
          origin-left
          scale-x-0
          bg-linear-to-r
          from-brand
          to-accent
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />
    </article>
  );
}
