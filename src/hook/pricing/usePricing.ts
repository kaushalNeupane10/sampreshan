"use client";

import { useQuery } from "@tanstack/react-query";
import { getPricing } from "@/services/pricing.service";
import { PricingPlansData } from "@/types/pricing";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function usePricing() {
  return useQuery<PricingPlansData>({
    queryKey: QUERY_KEYS.pricing,
    queryFn: getPricing,
  });
}
