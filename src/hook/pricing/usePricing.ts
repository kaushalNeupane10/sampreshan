"use client";

import { useQuery } from "@tanstack/react-query";
import { getPricing } from "@/services/pricing.service";
import { PricingPlan } from "@/types/pricing";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function usePricing() {
  return useQuery<PricingPlan>({
    queryKey: QUERY_KEYS.pricing,
    queryFn: getPricing,
  });
}
