"use client";

import { useQuery } from "@tanstack/react-query";
import { getService } from "@/services/services.service";
import { ServiceData } from "@/types/service";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function useService() {
  return useQuery<ServiceData>({
    queryKey: QUERY_KEYS.service,
    queryFn: getService,
  });
}
