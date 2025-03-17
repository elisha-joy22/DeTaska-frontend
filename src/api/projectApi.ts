import { Project, Space, WorkType, WorkAssignment } from "../types/Project";

const API_URL = "http://localhost:9002"

export const fetchProject = async (projectId: number): Promise<Project> => {
  const response = await fetch(`/api/projects/${projectId}`);
  if (!response.ok) throw new Error("Failed to fetch project");
  return response.json();
};

export const fetchSpaces = async (projectId: number): Promise<Space[]> => {
  const response = await fetch(`/api/projects/${projectId}/spaces`);
  if (!response.ok) throw new Error("Failed to fetch spaces");
  return response.json();
};

export const fetchWorkTypes = async (projectId: number): Promise<WorkType[]> => {
  const response = await fetch(`/api/projects/${projectId}/work-types`);
  if (!response.ok) throw new Error("Failed to fetch work types");
  return response.json();
};

export const fetchWorkAssignments = async (projectId: number): Promise<WorkAssignment[]> => {
  const response = await fetch(`/api/projects/${projectId}/work-assignments`);
  if (!response.ok) throw new Error("Failed to fetch work assignments");
  return response.json();
};

export const fetchTasks = async (workAssignmentId: number): Promise<Task> => {
  const response = await fetch(`${API_URL}/tasks?work_assignment_id=${workAssignmentId}`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};
