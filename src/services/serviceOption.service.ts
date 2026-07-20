import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { ServiceOptionData } from "@/types/service";

export async function getServiceOption(): Promise<ServiceOptionData> {
  const response = await apiClient.get<ApiRes<ServiceOptionData>>(
    API_ENDPOINTS.serviceOption,
  );

  return response.data.data;
}
