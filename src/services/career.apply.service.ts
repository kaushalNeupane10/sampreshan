import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { CareerApplication, CareerApplyPayload } from "@/types/apply";

export async function applyCareer(
  slug: string,
  payload: CareerApplyPayload,
): Promise<CareerApplication> {
  const formData = new FormData();

  formData.append("full_name", payload.full_name);
  formData.append("email", payload.email);
  formData.append("phone_number", payload.phone_number);
  formData.append("cv", payload.cv); // must be a File instance

  if (payload.cover_letter) {
    formData.append("cover_letter", payload.cover_letter);
  }
  if (payload.website) {
    formData.append("website", payload.website);
  }

  const { data } = await apiClient.post<ApiRes<CareerApplication>>(
    API_ENDPOINTS.careersApply(slug),
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data.data;
}
