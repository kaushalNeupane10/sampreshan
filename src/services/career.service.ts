import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { CareersData } from "@/types/career";

export async function getCareer(): Promise<CareersData> {
  const response = await apiClient.get<ApiRes<CareersData>>(
    API_ENDPOINTS.careers,
  );

  return response.data.data;
}
