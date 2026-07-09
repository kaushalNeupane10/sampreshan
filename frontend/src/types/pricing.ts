export interface PricingPlan {
  packageName: string;
  price: number;
  description: string;
  features: string[];
}

export type PricingApiResponse = PricingPlan[];
