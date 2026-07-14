import { apiClient, API_ENDPOINTS, type ApiResponse } from "@/lib/api";
import { PricingPlan } from "@/types/pricing";

export async function getPricing(): Promise<PricingPlan> {
  const response = await apiClient.get<ApiResponse<PricingPlan>>(
    API_ENDPOINTS.pricing,
  );

  return response.data.data;
}
