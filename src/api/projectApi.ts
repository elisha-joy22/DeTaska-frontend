import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:9002/projects"; // Mock API


export const fetchProjects = async()=>{
  const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch projects");
    return response.json();
}


export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
