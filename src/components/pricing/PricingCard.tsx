import { Check } from "lucide-react";
import Button from "../ui/Button";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

const formatPrice = (price: string) => {
  const numericPrice = Number(price);
  if (isNaN(numericPrice)) return "0";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
};

export default function PricingCard({ plan }: PricingCardProps) {
  const isFeatured = plan.is_featured;

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-bg-surface p-6 shadow-sm transition-all duration-300 ease-out will-change-transform md:p-8 ${
        isFeatured
          ? "border-brand shadow-brand scale-[1.02] lg:scale-[1.03] z-10"
          : "border-border hover:-translate-y-2 hover:border-brand hover:shadow-lg"
      }`}
    >
      {/* 1. Featured Badge Overlay */}
      {isFeatured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <span className="inline-flex items-center rounded-full bg-brand px-4 py-1.5 text-xs font-bold tracking-wide text-brand-foreground shadow-md uppercase">
            Most Popular
          </span>
        </div>
      )}

      {/* 2. Top Meta & Contextual Badges */}
      <div className="flex items-center justify-between gap-4 mb-4">
        {plan.badge ? (
          <span className="inline-flex items-center rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold tracking-wide text-accent-dark">
            {plan.badge}
          </span>
        ) : (
          <div className="h-6" aria-hidden="true" /> // Layout balancing placeholder
        )}

        {plan.is_studio_package && (
          <span className="inline-flex items-center rounded-full bg-brand-subtle px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-brand uppercase">
            Studio
          </span>
        )}
      </div>

      {/* 3. Package Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-text-heading md:text-2xl">
          {plan.name}
        </h3>

        <p className="text-pretty mt-2 text-sm leading-relaxed text-text-body min-h-[40px]">
          {plan.short_description}
        </p>

        {/* Price Block */}
        <div className="mt-5 flex flex-wrap items-baseline gap-1.5">
          {plan.is_custom_price || plan.billing_type === "custom" ? (
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black tracking-tight text-text-heading md:text-5xl">
                Custom
              </span>
              <span className="text-sm font-medium text-text-muted">
                Contact us
              </span>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-start">
                {plan.show_starting_at && (
                  <span className="text-[10px] font-bold tracking-widest text-brand uppercase mb-0.5">
                    Starting At
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-text-muted mr-0.5">
                    NPR
                  </span>
                  <span className="text-4xl font-black tracking-tight text-text-heading md:text-5xl">
                    {formatPrice(plan.price)}
                  </span>
                </div>
              </div>
              <span className="text-sm font-medium text-text-muted self-end mb-1">
                / {plan.billing_type_display}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Structural Divider */}
      <div className="h-px w-full bg-border-subtle mb-6" />

      {/* 4. Plan Features Grid Checklist */}
      <ul
        className="flex-1 space-y-4"
        aria-label={`Features included in ${plan.name}`}
      >
        {plan.features.map((feature) => (
          <li key={feature.id} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-subtle">
              <Check
                className="h-3 w-3 text-brand"
                strokeWidth={3}
                aria-hidden="true"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text-heading tracking-wide wrap-break-word">
                {feature.title}
              </p>

              {feature.description && (
                <p className="text-pretty mt-0.5 text-xs leading-relaxed text-text-muted wrap-break-word">
                  {feature.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* 5. Call to Action Button Wrapper */}
      <div className="mt-8 pt-4">
        <Button
          fullWidth
          variant={isFeatured ? "primary" : "outline"}
          className={`py-3 font-bold transition-all duration-300 ${
            isFeatured
              ? "shadow-brand hover:brightness-110"
              : "hover:bg-brand hover:text-brand-foreground"
          }`}
        >
          {plan.button_text || "Get Started"}
        </Button>
      </div>
    </article>
  );
}
