export interface Project {
    id: number;
    name: string;
    address: string;
    start_date: string;
    end_date?: string;
    estimated_budget: number;
    actual_budget?: number;
  }
  