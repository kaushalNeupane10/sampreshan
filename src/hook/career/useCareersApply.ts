"use client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { applyCareer } from "@/services/career.apply.service";
import { CareerApplyPayload } from "@/types/apply";

interface ApiErrorResponse {
  message?: string;
}

export default function useCareersApply(slug: string) {
  const mutation = useMutation({
    mutationFn: (payload: CareerApplyPayload) => applyCareer(slug, payload),
    onSuccess: () => {
      toast.success("Application submitted successfully.");
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to submit application.";
      toast.error(message);
    },
  });
  return {
    applyCareer: mutation.mutate,
    applyCareerAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
}
