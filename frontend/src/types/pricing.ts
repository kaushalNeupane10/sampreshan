export interface PricingPlan {
  id: number;
  packageName: string;
  price: number | null;
  billingType: "project" | "month" | "custom";
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}
