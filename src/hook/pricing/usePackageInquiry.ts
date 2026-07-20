"use client";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QUERY_KEYS } from "@/lib/react-query";
import { submitPackageInquiry } from "@/services/packageInquiry.service";
import type {
  PackageInquiryCreated,
  PackageInquiryErrorResponse,
  PackageInquiryRequest,
} from "@/types/packageInquiry";

export default function usePackageInquiry() {
  return useMutation<
    PackageInquiryCreated,
    AxiosError<PackageInquiryErrorResponse>,
    PackageInquiryRequest
  >({
    mutationKey: QUERY_KEYS.packageInquiry,
    mutationFn: submitPackageInquiry,
    retry: false,
  });
}
