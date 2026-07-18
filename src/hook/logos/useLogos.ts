"use client";

import { useQuery } from "@tanstack/react-query";
import { getLogos } from "@/services/logos.service";
import { LogosData } from "@/types/logo";
import { QUERY_KEYS } from "@/lib/react-query";

export default function useLogo() {
  return useQuery<LogosData>({
    queryKey: QUERY_KEYS.brands,
    queryFn: getLogos,
  });
}
