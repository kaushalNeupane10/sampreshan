import { apiClient, API_ENDPOINTS, type ApiRes } from "@/lib/api";
import { teamMemberData } from "@/types/team";
export async function getTeam(): Promise<teamMemberData> {
  const response = await apiClient.get<ApiRes<teamMemberData>>(
    API_ENDPOINTS.team,
  );

  return response.data.data;
}
