import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}
export default function useTeamMember() {
  const [data, setData] = useState<TeamMember | []>([]);
  const [loading, setLoading] = useState(false);

  const fetchTeam = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // fetchTeam()
  }, [fetchTeam]);
  return {
    data,
    loading,
  };
}
