"use client";

import { useQuery } from "@tanstack/react-query";
import { getServiceOption } from "@/services/serviceOption.service";
import { ServiceOptionData } from "@/types/service";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function useServiceOption() {
  return useQuery<ServiceOptionData>({
    queryKey: QUERY_KEYS.serviceOption,
    queryFn: getServiceOption,
  });
}
