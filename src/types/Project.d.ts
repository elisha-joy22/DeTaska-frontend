export interface Project {
    id: number;
    name: string;
    address: string;
    start_date: string;
    end_date?: string;
    estimated_budget: number;
    actual_budget?: number;
  }
  
  export interface Space {
    id: number;
    name: string;
    parent_space_id: number | null;
    type: string;
    status: string;
  }

  export interface WorkType {
    id: number;
    name: string;
  }
  
  export interface WorkAssignment {
    id: number;
    name: string;
    status: "Pending" | "In Progress" | "Completed";
  }


  export interface Task {
    id: number;
    name: string;
    description?: string | null;
    status: "Pending" | "In Progress" | "Completed";
    project_id: number;
    work_type_id: number;
    space_id?: number | null;
    assigned_to?: number | null;
    expected_start: string;
    actual_start?: string;
    expected_end: string;
    actual_end?: string;
    expected_cost: number;
    actual_cost: number;
    created_at: string;
    updated_at: string;
  }
  