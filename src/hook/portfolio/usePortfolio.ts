"use cient";

import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "@/services/portfolio.service";
import { PortfolioData } from "@/types/portfolio";
import { QUERY_KEYS } from "@/lib/react-query";

export default function usePortfolio() {
  return useQuery<PortfolioData>({
    queryKey: QUERY_KEYS.portfolio,
    queryFn: getPortfolio,
  });
}
