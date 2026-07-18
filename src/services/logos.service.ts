import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { LogosData } from "@/types/logo";

export async function getLogos(): Promise<LogosData> {
  const response = await apiClient.get<ApiRes<LogosData>>(API_ENDPOINTS.brands);
  return response.data.data;
}
