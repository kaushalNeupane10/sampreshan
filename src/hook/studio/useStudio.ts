"use client";

import { useQuery } from "@tanstack/react-query";
import { getStudio } from "@/services/studios.service";
import { PortfolioData } from "@/types/portfolio";
import { QUERY_KEYS } from "@/lib/react-query";

export default function useStudio() {
  return useQuery<PortfolioData>({
    queryKey: QUERY_KEYS.studio,
    queryFn: getStudio,
  });
}
