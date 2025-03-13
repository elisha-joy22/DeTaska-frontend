import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Project } from "../../types/Project";
import '../../styles/ProjectForm.css'

const API_URL = "http://localhost:9002/projects"; // Adjust if needed

const ProjectForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Project>();
  const queryClient = useQueryClient();

  const mutation = useMutation<Project, Error, Project>({
    mutationFn: async (newProject: Project) => {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) throw new Error("Failed to create project");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      reset();
    },
  });

  const onSubmit = (data: Project) => mutation.mutate(data);

  return (
    <div>
    <h2 className="project-form">Create a New Project</h2>
    <div className="project-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Project Name</label>
          <input {...register("name", { required: "Name is required" })} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label>Address</label>
          <input {...register("address")} />
        </div>

        <div>
          <label>Start Date</label>
          <input type="date" {...register("start_date", { required: "Start date is required" })} />
          {errors.start_date && <p className="error">{errors.start_date.message}</p>}
        </div>

        <div>
          <label>End Date</label>
          <input type="date" {...register("end_date")} />
        </div>

        <div>
          <label>Estimated Budget</label>
          <input type="number" {...register("estimated_budget", { required: "Budget is required", valueAsNumber: true })} />
          {errors.estimated_budget && <p className="error">{errors.estimated_budget.message}</p>}
        </div>

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Create Project"}
        </button>
        {mutation.isError && <p className="error">Failed to create project</p>}
      </form>
    </div>
    </div>
  );
};

export default ProjectForm;
