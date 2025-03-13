import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SpacesProvider } from "./context/spaceContext";
import { WorkTypesProvider } from "./context/workTypeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectForm from "./components/forms/ProjectForm";
import Login from "./pages/Login";
import SpacesList from "./components/spacesList";
import WorkTypesList from "./components/workTypeList";


const App = () => {
  return (
    <ThemeProvider>
      <SpacesProvider>
      <WorkTypesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="projects" element={<Projects/>} />
            <Route path="/projects/new" element={<ProjectForm />} />
            <Route path="spaces" element={<SpacesList/>}/>
            <Route path="work-types" element={<WorkTypesList/>}/>
          </Route>
        </Routes>
      </WorkTypesProvider>
      </SpacesProvider>
    </ThemeProvider>
  );
};

export default App;
