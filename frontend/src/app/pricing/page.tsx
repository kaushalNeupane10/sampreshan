import PricingCard from "@/components/pricing/PricingCard";
import { pricingPlans } from "@/data/pricing";

export default function page() {
  return (
    <>
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
    </>
  );
}
