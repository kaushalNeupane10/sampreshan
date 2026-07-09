import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PricingPlan } from "@/types/pricing";

export default function usePricing() {
  const [pricing, setPricing] = useState<PricingPlan>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPricing = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get<PricingPlan>("/api/pricing", {
        signal,
      });
      setPricing(data);
    } catch (err) {
      if (axios.isCancel(err)) return;

      setError("Failed to fetch pricing.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  //   useEffect(() => {
  //     fetchPricing();
  //   }, [fetchPricing]);

  return {
    pricing,
    loading,
    error,
    refetch: fetchPricing,
  };
}
