import { useProjects } from "../api/projectApi";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import { Project } from "../types/Project";


const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects</p>;

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      
      <Link to="/projects/new" className="create-project-button">
        + Create Project
      </Link>

      <div className="projects-list">
        {projects?.map((project:Project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p><strong>Address:</strong> {project.address}</p>
            <p><strong>Start Date:</strong> {project.start_date}</p>
            {project.end_date && <p><strong>End Date:</strong> {project.end_date}</p>}
            <p><strong>Estimated Budget:</strong> ${project.estimated_budget}</p>
            {project.actual_budget && <p><strong>Actual Budget:</strong> ${project.actual_budget}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
