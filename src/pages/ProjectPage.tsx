import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProject, useSpaces, useWorkTypes, useWorkAssignments } from "../queries/projectQueries";
import WorkAssignmentsSection from "../components/WorkAssignmentSection";

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>(); // Ensure projectId is a string
  const [showWorkAssignments, setShowWorkAssignments] = useState(false);

  const { data: project, isLoading: projectLoading, error: projectError } = useProject(projectId);
  const { data: spaces } = useSpaces(projectId);
  const { data: workTypes } = useWorkTypes(projectId);
  const { data: workAssignments } = useWorkAssignments(projectId);

  if (projectLoading) return <p>Loading project details...</p>;
  if (projectError) return <p>Error loading project details.</p>;

  return (
    <div>
      {/* Top Section */}
      <div className="top-section">
        <div className="left">
          <h1>{project?.name}</h1>
          <p>Address: {project?.address}</p>
          <p>Start Date: {project?.start_date}</p>
          <p>End Date: {project?.end_date}</p>
        </div>
        <div className="right">
          <h2>Expenses</h2>
          <p>Estimated Budget: ${project?.estimated_budget}</p>
          <p>Actual Budget: ${project?.actual_budget ?? "Not Available"}</p>
          <button>Add Expense</button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <div className="left">
          <h2>Spaces</h2>
          <button>Add Space</button>
          <ul>
            {spaces?.map((space) => (
              <li key={space.id}>{space.name} ({space.type})</li>
            ))}
          </ul>
        </div>
        <div className="right">
          <h2>Work Types</h2>
          <ul>
            {workTypes?.map((workType) => (
              <li key={workType.id}>{workType.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="left">
          <h2>Work Assignments</h2>
          <button onClick={() => setShowWorkAssignments(!showWorkAssignments)}>
            {showWorkAssignments ? "Hide Work Assignments" : "View Work Assignments"}
          </button>
        </div>
        <div className="right">
          <h2>Work Progress</h2>
          <progress
            value={workAssignments?.filter(w => w.status === "Completed").length}
            max={workAssignments?.length}
          ></progress>
        </div>
      </div>

      {/* Expandable Work Assignments Section */}
      {showWorkAssignments && <WorkAssignmentsSection workAssignments={workAssignments ?? []} />}
    </div>
  );
};

export default ProjectPage;
