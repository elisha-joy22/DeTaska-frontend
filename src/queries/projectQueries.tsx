import { useQuery } from "@tanstack/react-query";
import { fetchProject, fetchSpaces, fetchWorkTypes, fetchWorkAssignments } from "../api/projectApi";
import { Project, Space, WorkType, WorkAssignment } from "../types/Project";

export const useProject = (projectId?: string) => {
  return useQuery<Project>({
    queryKey: ["project", projectId],
    queryFn: () => fetchProject(Number(projectId)),
    enabled: !!projectId, // Only run query if projectId is valid
  });
};

export const useSpaces = (projectId?: string) => {
  return useQuery<Space[]>({
    queryKey: ["spaces", projectId],
    queryFn: () => fetchSpaces(Number(projectId)),
    enabled: !!projectId,
  });
};

export const useWorkTypes = (projectId?: string) => {
  return useQuery<WorkType[]>({
    queryKey: ["workTypes", projectId],
    queryFn: () => fetchWorkTypes(Number(projectId)),
    enabled: !!projectId,
  });
};

export const useWorkAssignments = (projectId?: string) => {
  return useQuery<WorkAssignment[]>({
    queryKey: ["workAssignments", projectId],
    queryFn: () => fetchWorkAssignments(Number(projectId)),
    enabled: !!projectId,
  });
};
