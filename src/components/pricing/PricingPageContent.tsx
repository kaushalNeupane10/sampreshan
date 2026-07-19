"use client";

import PricingCard from "@/components/pricing/PricingCard";
import PricingCardSkeleton from "@/components/pricing/PricingCardSkeleton";
import PricingFaq from "@/components/pricing/PricingFaq";
import { pricingFaqs } from "@/data/pricingFAQ";
import usePricing from "@/hook/pricing/usePricing";

export default function PricingPageContent() {
  const { data, isLoading, isError, error } = usePricing();

  return (
    <>
      <section
        aria-label="Pricing packages"
        className="container-custom px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28"
      >
        {isLoading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <PricingCardSkeleton key={index} />
            ))}
          </div>
        )}

        {!isLoading && isError && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">
              {error?.message || "Unable to load pricing plans."}
            </p>
          </div>
        )}

        {!isLoading && !isError && (!data || data.length === 0) && (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-border bg-bg-surface">
            <p className="text-text-muted">No pricing plans available.</p>
          </div>
        )}

        {!isLoading && !isError && data && data.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}
      </section>

      <PricingFaq faqs={pricingFaqs} />
    </>
  );
}
