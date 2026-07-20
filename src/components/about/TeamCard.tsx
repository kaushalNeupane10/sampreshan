import Image from "next/image";
import { Globe, ShieldCheck, UserRound } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { teamMember } from "@/types/team";

interface TeamCardProps {
  member: teamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-elevated p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 md:p-8">
      {/* 1. Floating Metadata Badges */}
      <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-2 justify-between pointer-events-none">
        {/* Business Area Badge */}
        {member.business_area_display && (
          <span className="inline-flex items-center rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase border border-white/10">
            {member.business_area_display}
          </span>
        )}

        {/* Leadership Status Indicator */}
        {member.is_leadership && (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-subtle/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold tracking-wider text-brand uppercase border border-brand/20">
            <ShieldCheck size={12} className="shrink-0" />
            <span>Core</span>
          </span>
        )}
      </div>

      {/* 2. Enhanced Avatar Layout */}
      <div className="relative mx-auto mt-4 mb-6 flex h-28 w-28 shrink-0 items-center justify-center rounded-full">
        {/* Background Ambient Glow on Hover */}
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-brand-500 via-purple-500 to-accent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40" />

        {/* Border Ring Wrapping the Image */}
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-border-subtle bg-bg-sunken">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={`${member.name}'s profile`}
              width={112}
              height={112}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <UserRound
              className="h-12 w-12 text-text-muted"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* 3. Identity Block */}
      <div className="mb-4">
        <h3 className="bg-linear-to-r from-brand-500 via-purple-500 to-accent bg-clip-text text-transparent text-xl font-bold tracking-tight">
          {member.name}
        </h3>
        <p className="mt-1.5 text-xs font-semibold leading-snug text-text-heading/80 uppercase tracking-widest line-clamp-2 min-h-[2rem]">
          {member.job_title}
        </p>
      </div>

      {/* 4. Bio Block */}
      <p className="flex-1 text-pretty text-sm leading-relaxed text-text-body/90 max-w-sm line-clamp-4">
        {member.short_bio}
      </p>

      {/* 5. Social & Direct Access Actions Row */}
      <div className="mt-6 flex justify-center gap-3 pt-4 border-t border-border-subtle">
        {member.linkedin_url && (
          <a
            href={member.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${member.name}'s LinkedIn Profile`}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-page text-text-body transition-all duration-200 hover:border-brand hover:bg-brand-subtle/10 hover:text-brand"
          >
            <FaLinkedin size={16} />
          </a>
        )}

        {member.website_url && (
          <a
            href={member.website_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${member.name}'s Professional Portfolio`}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-page text-text-body transition-all duration-200 hover:border-brand hover:bg-brand-subtle/10 hover:text-brand"
          >
            <Globe size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
