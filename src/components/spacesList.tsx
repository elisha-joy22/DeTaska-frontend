import { useSpacesContext } from "../context/spaceContext";

const SpacesList = () => {
  const spacesQuery = useSpacesContext();

  if (!spacesQuery) return <p>Error: Spaces Context not available</p>;
  if (spacesQuery.isLoading) return <p>Loading spaces...</p>;
  if (spacesQuery.isError) return <p>Error loading spaces</p>;

  return (
    <div>
      <h2>Spaces</h2>
      <ul>
        {spacesQuery.data?.map((space) => (
          <li key={space.id}>
            {space.name} - {space.type} ({space.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpacesList;
