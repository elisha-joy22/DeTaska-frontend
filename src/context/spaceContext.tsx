import { createContext, useContext } from "react";
import { useSpaces } from "../api/spaceApi";

const SpacesContext = createContext<ReturnType<typeof useSpaces> | null>(null);

export const SpacesProvider = ({ projectId, children }: { projectId:number,children: React.ReactNode }) => {
  const spacesQuery = useSpaces(projectId);
  return (
    <SpacesContext.Provider value={spacesQuery}>
      {children}
    </SpacesContext.Provider>
  );
};

export const useSpacesContext = () => {
  const context = useContext(SpacesContext);
  if (!context) {
    throw new Error("useSpacesContext must be used within a SpacesProvider");
  }
  return context;
};
