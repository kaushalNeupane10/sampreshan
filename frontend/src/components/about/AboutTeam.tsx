import React from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export default function AboutTeam() {
  const team: TeamMember[] = [
    {
      id: "rabin",
      name: "Rabin Subedi",
      role: "CEO",
      bio: "Ravi founded Sampreshan to bridge sharp strategy with world-class craft. He leads creative vision across every engagement.",
      imageSrc: "/team/ravi.jpg",
    },
    {
      id: "shobhit",
      name: "Shobhit",
      role: "Head of Design",
      bio: "Elena builds brand systems that scale. Her work has shipped for startups and household names alike.",
      imageSrc: "/team/elena.jpg",
    },
    {
      id: "kaushal",
      name: "kaushal Neupane",
      role: "Frontend Developer",
      bio: "Tobias runs our in-house studio, from concept and capture to the final color grade. He lives for a good story.",
      imageSrc: "/team/tobias.jpg",
    },
    {
      id: "aisha",
      name: "Aisha Rahman",
      role: "Head of Growth",
      bio: "Aisha turns data into demand. She architects full-funnel marketing programs obsessed with sustainable tracking and impact.",
      imageSrc: "/team/aisha.jpg",
    },
    {
      id: "liam",
      name: "Liam Carter",
      role: "Lead Engineer",
      bio: "Liam ships clean, scalable architectures and interactive applications. He translates complex requirements into pixel-perfect code.",
      imageSrc: "/team/liam.jpg",
    },
    {
      id: "grace",
      name: "Grace Otieno",
      role: "Head of IT & Cloud",
      bio: "Grace keeps infrastructure resilient and secure. She leads cloud systems, DevOps optimization, and automated delivery flows.",
      imageSrc: "/team/grace.jpg",
    },
  ];

  return (
    <section
      aria-labelledby="team-heading"
      className="bg-bg-page py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle"
    >
      <div className="container-custom mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-bold tracking-wider text-brand uppercase block mb-3">
            The Team
          </span>
          <h2
            id="team-heading"
            className="text-3xl md:text-4xl font-black text-text-heading tracking-tight mb-4 text-balance"
          >
            The people behind the work
          </h2>
          <p className="text-base md:text-lg text-text-body text-pretty leading-relaxed">
            A senior, cross-functional team that treats your brand like our own.
          </p>
        </div>

        {/* Responsive Grid System: 1 Column Mobile -> 2 Columns Tablet -> 3 Columns Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <article
              key={member.id}
              className="
                group rounded-3xl
                border border-border
                bg-bg-elevated
                p-8
                flex flex-col items-center text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand/30
                hover:shadow-lg
              "
            >
              {/* Profile Image Container utilizing next/image */}
              <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-2 border-border-subtle bg-bg-sunken group-hover:border-brand/20 transition-colors duration-300">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(max-w-768px) 112px, 112px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={member.id === "ravi" || member.id === "elena"} // Optimize LCP for top profile photos
                />
              </div>

              {/* Identity Block */}
              <h3 className="text-xl font-bold text-text-heading transition-colors duration-200">
                {member.name}
              </h3>

              <p className="text-sm font-semibold text-brand mt-1 mb-4 uppercase tracking-wider">
                {member.role}
              </p>

              {/* Bio Block */}
              <p className="text-sm leading-relaxed text-text-body mb-6 text-pretty max-w-sm grow">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
