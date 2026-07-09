"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { StudioApiResponse } from "@/types/studio";

export default function useStudio() {
  const [studio, setStudios] = useState<StudioApiResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudios = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api");
      setStudios(res.data);
    } catch (err) {
      if (axios.isCancel(err)) return;

      setError("Failed to fetch pricing.");
    } finally {
      setLoading(false);
    }
  }, []);
  return {
    studio,
    loading,
    error,
    refetch: fetchStudios,
  };
}
