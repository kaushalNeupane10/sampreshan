"use client";
import PricingCard from "@/components/pricing/PricingCard";
import PricingFaq from "@/components/pricing/PricingFaq";
import { pricingFaqs } from "@/data/pricingFAQ";
import usePricing from "@/hook/pricing/usePricing";

export default function page() {
  const { data, isLoading, isError, error } = usePricing();
  return (
    <>
      {/* pricing card section */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data?.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
      {/* pricing faq section */}
      <PricingFaq faqs={pricingFaqs} />;
    </>
  );
}
