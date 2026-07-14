import PricingCard from "@/components/pricing/PricingCard";
import PricingFaq from "@/components/pricing/PricingFaq";
import { pricingPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/pricingFAQ";

export default function page() {
  return (
    <>
      {/* pricing card section */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
      {/* pricing faq section */}
      <PricingFaq faqs={pricingFaqs} />;
    </>
  );
}
