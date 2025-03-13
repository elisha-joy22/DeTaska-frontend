import { useWorkTypesContext } from "../context/workTypeContext";

const WorkTypesList = () => {
  const workTypesQuery = useWorkTypesContext();

  if (!workTypesQuery) return <p>Error: Work Types Context not available</p>;
  if (workTypesQuery.isLoading) return <p>Loading work types...</p>;
  if (workTypesQuery.isError) return <p>Error loading work types</p>;

  return (
    <div>
      <h2>Work Types</h2>
      <ul>
        {workTypesQuery.data?.map((workType) => (
          <li key={workType.id}>
            {workType.name} - {workType.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkTypesList;
