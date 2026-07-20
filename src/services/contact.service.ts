import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import type {
  ContactInquiryCreated,
  ContactInquiryRequest,
} from "@/types/contact";

export async function submitContactInquiry(
  payload: ContactInquiryRequest,
): Promise<ContactInquiryCreated> {
  const { data } = await apiClient.post<ApiRes<ContactInquiryCreated>>(
    API_ENDPOINTS.contactInquiries,
    { ...payload, website: "" },
  );

  return data.data;
}
