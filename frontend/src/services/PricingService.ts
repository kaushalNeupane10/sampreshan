import apiClient from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { PricingPlan } from "@/types/pricing";

export const pricingService = {
  async getPricing() {
    const response = await apiClient.get<PricingPlan>(API_ENDPOINTS.pricing);

    return response.data;
  },
};
