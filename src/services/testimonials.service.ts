import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { TestimonialsData } from "@/types/testimonials";

export async function gettestimonials(): Promise<TestimonialsData> {
  const response = await apiClient.get<ApiRes<TestimonialsData>>(
    API_ENDPOINTS.testimonials,
  );

  return response.data.data;
}
