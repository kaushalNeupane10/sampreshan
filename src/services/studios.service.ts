import {
  apiClient,
  API_ENDPOINTS,
  getApiError,
  type ApiResponse,
} from "@/lib/api";
import { Portfolio, PortfolioData } from "@/types/portfolio";

export async function getStudio(): Promise<PortfolioData> {
  try {
    const response = await apiClient.get<ApiResponse<Portfolio>>(
      API_ENDPOINTS.studio,
      { params: { page: 1, limit: 100 } },
    );

    return response.data.results;
  } catch (error) {
    throw new Error(getApiError(error));
  }
}
