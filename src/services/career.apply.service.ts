import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { CareerApplication, CareerApplyPayload } from "@/types/apply";

export async function applyCareer(
  payload: CareerApplyPayload,
): Promise<CareerApplication> {
  const { data } = await apiClient.post<ApiRes<CareerApplication>>(
    API_ENDPOINTS.careersApply,
    payload,
  );

  return data.data;
}
