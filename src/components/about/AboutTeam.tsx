"use client";

import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";
import useTeam from "@/hook/about/useTeamMember";

export default function AboutTeam() {
  const { data, isLoading, isError, error } = useTeam();

  return (
    <section
      aria-labelledby="team-heading"
      className="border-b border-border-subtle bg-bg-page px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-brand">
            The Team
          </span>

          <h2
            id="team-heading"
            className="mb-4 text-3xl font-black tracking-tight text-text-heading text-balance md:text-4xl"
          >
            The people behind the work
          </h2>

          <p className="text-base leading-relaxed text-text-body text-pretty md:text-lg">
            A senior, cross-functional team that treats your brand like our own.
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <TeamCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load team members."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No team members available.</p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
