"use client";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QUERY_KEYS } from "@/lib/react-query";
import { submitContactInquiry } from "@/services/contact.service";
import type {
  ContactInquiryCreated,
  ContactInquiryErrorResponse,
  ContactInquiryRequest,
} from "@/types/contact";

export default function useContactInquiry() {
  return useMutation<
    ContactInquiryCreated,
    AxiosError<ContactInquiryErrorResponse>,
    ContactInquiryRequest
  >({
    mutationKey: QUERY_KEYS.contactInquiry,
    mutationFn: submitContactInquiry,
    retry: false,
  });
}
