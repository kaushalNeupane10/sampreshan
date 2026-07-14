import { PricingPlan } from "@/types/pricing";
export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    packageName: "Starter",
    price: 2500,
    billingType: "project",
    description:
      "For focused, single-service projects that need to move fast without cutting corners.",
    features: [
      "One service focus area",
      "Discovery & strategy session",
      "Up to 2 revision rounds",
      "4–6 week delivery",
      "Email support",
    ],
    buttonText: "Start with Starter",
  },
  {
    id: 2,
    packageName: "Growth",
    price: 7500,
    billingType: "month",
    popular: true,
    description:
      "For growing brands that need multiple services working together on an ongoing basis.",
    features: [
      "Up to 3 combined services",
      "Dedicated project lead",
      "Unlimited revision rounds",
      "Monthly strategy & reporting",
      "Priority support",
      "Quarterly roadmap planning",
    ],
    buttonText: "Choose Growth",
  },
  {
    id: 3,
    packageName: "Enterprise",
    price: null,
    billingType: "custom",
    description:
      "For organizations that need a full creative and technology partner at scale.",
    features: [
      "All services fully integrated",
      "Dedicated cross-functional team",
      "Custom SLAs & security review",
      "Embedded strategy partner",
      "24/7 managed support",
      "Executive reporting",
    ],
    buttonText: "Talk to us",
  },
];
