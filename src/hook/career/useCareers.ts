"use client";

import { useQuery } from "@tanstack/react-query";
import { getCareer } from "@/services/career.service";
import { CareersData } from "@/types/career";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function useCareers() {
  return useQuery<CareersData>({
    queryKey: QUERY_KEYS.careers,
    queryFn: getCareer,
  });
}
