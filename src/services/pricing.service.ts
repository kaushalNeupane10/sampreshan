import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { PricingPlansData } from "@/types/pricing";

export async function getPricing(): Promise<PricingPlansData> {
  const response = await apiClient.get<ApiRes<PricingPlansData>>(
    API_ENDPOINTS.pricing,
  );

  return response.data.data;
}
