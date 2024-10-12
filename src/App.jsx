import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import DefaultHomePage from "./components/DefaultHomePage.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleAddProject = (projectData) => {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;
  if(projectsState.selectedProjectId === null)
    content = <NewProject onAddProject={handleAddProject}/>;
  else if(projectsState.selectedProjectId === undefined)
    content = <DefaultHomePage onStartAddProject={handleStartAddProject}/>;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>

  );
}

export default App;
