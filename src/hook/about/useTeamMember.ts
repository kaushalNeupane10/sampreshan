"use client";

import { useQuery } from "@tanstack/react-query";
import { getTeam } from "@/services/team.service";
import { teamMemberData } from "@/types/team";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function useTeam() {
  return useQuery<teamMemberData>({
    queryKey: QUERY_KEYS.team,
    queryFn: getTeam,
  });
}
