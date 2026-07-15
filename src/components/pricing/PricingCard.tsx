import { Check } from "lucide-react";

import Button from "../ui/Button";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

const formatPrice = (price: string) =>
  new Intl.NumberFormat("en-US").format(Number(price));

export default function PricingCard({ plan }: PricingCardProps) {
  const isFeatured = plan.is_featured;

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-bg-surface p-6 shadow-sm transition-all duration-300 md:p-8 ${
        isFeatured
          ? "border-brand shadow-brand"
          : "border-border hover:-translate-y-2 hover:border-brand hover:shadow-lg"
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Custom Badge */}
      {plan.badge && (
        <div className="mb-5">
          <span className="inline-flex rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold text-accent-dark">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-text-heading md:text-2xl">
          {plan.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-text-body">
          {plan.short_description}
        </p>

        <div className="mt-6 flex flex-wrap items-end gap-2">
          {plan.is_custom_price ? (
            <>
              <span className="text-4xl font-black leading-none text-text-heading md:text-5xl">
                Custom
              </span>

              <span className="mb-1 text-sm text-text-muted">Contact us</span>
            </>
          ) : (
            <>
              <span className="text-4xl font-black leading-none text-text-heading md:text-5xl">
                {plan.show_starting_at && "From "}
                NPR {formatPrice(plan.price)}
              </span>

              <span className="mb-1 text-sm text-text-muted">
                / {plan.billing_type_display}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="my-8 h-px bg-border" />

      {/* Features */}
      <ul className="flex-1 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.id} className="flex items-start gap-3">
            <Check
              className="mt-1 h-5 w-5 shrink-0 text-brand"
              strokeWidth={2.5}
            />

            <div>
              <p className="font-medium text-text-heading">{feature.title}</p>

              {feature.description && (
                <p className="mt-1 text-sm leading-6 text-text-body">
                  {feature.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <Button
          fullWidth
          variant={isFeatured ? "primary" : "outline"}
          className={isFeatured ? "shadow-brand" : undefined}
        >
          {plan.button_text}
        </Button>
      </div>
    </article>
  );
}
