"use client";

import { useCallback, useState } from "react";
import { getPricing } from "@/services/pricing.service";
import { PricingPlan } from "@/types/pricing";
import { getApiError } from "@/lib/api/errors";

export default function usePricing() {
  const [pricing, setPricing] = useState<PricingPlan>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // fetch pricing
  const fetchPricing = useCallback(async () => {
    setLoading(true);

    setError(null);

    try {
      const data = await getPricing();

      setPricing(data);
    } catch (error) {
      setError(getApiError(error));
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    pricing,
    loading,
    error,
    refetch: fetchPricing,
  };
}
