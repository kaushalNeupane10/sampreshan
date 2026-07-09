import { Check } from "lucide-react";
import Button from "../ui/Button";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const isPopular = plan.popular;

  return (
    <article
      className={`
  relative flex h-full flex-col rounded-3xl border bg-bg-surface p-8
  transition-all duration-300
  ${
    isPopular
      ? "border-brand shadow-brand"
      : "border-border hover:-translate-y-1 hover:border-brand hover:shadow-lg"
  }
`}
    >
      {isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="rounded-full bg-brand px-4 py-1 text-xs font-semibold text-brand-foreground shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div>
        <p className="text-lg font-semibold text-text-heading">
          {plan.packageName}
        </p>

        <div className="mt-5 flex flex-wrap items-end gap-2">
          {plan.price ? (
            <>
              <span className="text-5xl font-bold leading-none text-text-heading">
                ${plan.price.toLocaleString()}
              </span>

              <span className="mb-1 text-base text-text-muted">
                / {plan.billingType}
              </span>
            </>
          ) : (
            <>
              <span className="text-5xl font-bold leading-none text-text-heading">
                Custom
              </span>

              <span className="mb-1 text-base text-text-muted">
                / tailored engagement
              </span>
            </>
          )}
        </div>

        <p className="mt-6 text-base leading-7 text-text-body">
          {plan.description}
        </p>
      </div>

      <div className="my-8 h-px bg-border" />

      <ul className="space-y-4">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-text-body"
          >
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-brand"
              strokeWidth={2.5}
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <Button
          fullWidth
          variant={isPopular ? "primary" : "outline"}
          className={isPopular ? "shadow-brand" : undefined}
        >
          {plan.buttonText}
        </Button>
      </div>
    </article>
  );
}
