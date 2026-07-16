"use client";

import ServiceCard from "../service/ServiceCard";
import ServiceCardSkeleton from "../service/ServiceCardSkeleton";
import useServices from "@/hook/service/useService";

export default function ServicesSection() {
  const { data, isLoading, isError, error } = useServices();

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
            className="text-4xl font-bold leading-tight tracking-tight text-text-heading sm:text-5xl lg:text-6xl"
          >
            One team for{" "}
            <span className="bg-linear-to-r from-brand-500 via-purple-500 to-accent bg-clip-text text-transparent">
              every capability
            </span>
            <span className="text-accent">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-body">
            From brand identity to cloud infrastructure, our integrated teams
            cover the full spectrum of creative and technology work.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-border" />

        {/* Loading */}
        {isLoading && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <ServiceCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {!isLoading && isError && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load services."}
            </p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="mt-14 flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No services available.</p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
