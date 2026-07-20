import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import type {
  PackageInquiryCreated,
  PackageInquiryRequest,
} from "@/types/packageInquiry";

export async function submitPackageInquiry(
  payload: PackageInquiryRequest,
): Promise<PackageInquiryCreated> {
  const { data } = await apiClient.post<ApiRes<PackageInquiryCreated>>(
    API_ENDPOINTS.packageInquiries,
    { ...payload, website: "" },
  );

  return data.data;
}
