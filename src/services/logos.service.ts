import { apiClient, API_ENDPOINTS } from "@/lib/api";
import { LogosData, LogoApiResponse } from "@/types/logo";

export async function getLogos(): Promise<LogosData> {
  const response = await apiClient.get<LogoApiResponse<LogosData>>(
    API_ENDPOINTS.brands,
  );
  return response.data.data;
}
