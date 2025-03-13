import { createContext, useContext } from "react";
import { useWorkTypes } from "../api/spaceApi";



const WorkTypesContext = createContext<ReturnType<typeof useWorkTypes> | null>(null);

export const WorkTypesProvider = ({ children }: { children: React.ReactNode }) => {
  const workTypesQuery = useWorkTypes();
  return (
    <WorkTypesContext.Provider value={workTypesQuery}>
      {children}
    </WorkTypesContext.Provider>
  );
};

export const useWorkTypesContext = () => {
  const context = useContext(WorkTypesContext);
  if (!context) {
    throw new Error("useWorkTypesContext must be used within a WorkTypesProvider");
  }
  return context;
};
