import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { ServiceData } from "@/types/service";

export async function getService(): Promise<ServiceData> {
  const response = await apiClient.get<ApiRes<ServiceData>>(
    API_ENDPOINTS.service,
  );

  return response.data.data;
}
