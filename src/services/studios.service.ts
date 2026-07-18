import { apiClient, API_ENDPOINTS, type ApiResponse } from "@/lib/api";
import { PortfolioData } from "@/types/portfolio";

export async function getStudio(): Promise<PortfolioData> {
  const response = await apiClient.get<ApiResponse<PortfolioData>>(
    API_ENDPOINTS.studio,
  );
  return response.data.results;
}
