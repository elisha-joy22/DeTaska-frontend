import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:9002";


export const fetchSpaces = async (projectId?: number) => {
    const url = projectId ? `${API_URL}/spaces?project_id=${projectId}` : `${API_URL}/spaces`;
    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch spaces");
    return response.json();
  };
  
export const fetchWorkTypes = async () => {
    const response = await fetch(`${API_URL}/work-types`);
    if (!response.ok) throw new Error("Failed to fetch work types");
    return response.json();
};

export const useSpaces = (projectId?: number) => {
    return useQuery<Space[]>({
      queryKey: ["spaces", projectId],
      queryFn: () => fetchSpaces(projectId),
      enabled: !!projectId, 
    });
}
  
  export const useWorkTypes = () => {
    return useQuery<WorkType[]>({ queryKey: ["workTypes"], queryFn: fetchWorkTypes });
  };

