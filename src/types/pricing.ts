export interface PricingService {
  id: number;
  name: string;
  slug: string;
}

export interface PricingFeature {
  id: number;
  title: string;
  description: string;
  order: number;
}

export interface PricingPlan {
  id: number;
  service: PricingService;
  name: string;
  short_description: string;
  price: string;
  billing_type: "project" | "month" | "custom" | "year" | "hour";
  billing_type_display: string;
  show_starting_at: boolean;
  is_custom_price: boolean;
  badge: string;
  button_text: string;
  is_featured: boolean;
  is_studio_package: boolean;
  features: PricingFeature[];
}

export type PricingPlansData = PricingPlan[];

// faq section
export interface PricingFaqItem {
  id: number;
  question: string;
  answer: string;
}
