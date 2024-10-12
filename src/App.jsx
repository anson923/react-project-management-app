import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import DefaultHomePage from "./components/DefaultHomePage.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

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
        id: Math.random(),
        tasks: []
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project=> project.id !== prevState.selectedProjectId),
      }
    })
  }

  const handleAddTask = (projectID, task) => {
    setProjectsState(prevState => {
      const updatedProjects = prevState.projects.map(project => {
        if(project.id === projectID){
          return {
            ...project,
            tasks: [...project.tasks, task]
          };
        }
        return project;
      })

      return {
        ...prevState,
        projects: updatedProjects
      }
    })
  }

  const handleDeleteTask = (projectID, taskID) => {
    setProjectsState(prevState => {
      const updatedProjects = prevState.projects.map(project => {
        if(project.id === projectID){
          return {
            ...project,
            tasks: project.tasks.filter(task => task.id !== taskID)
          }
        }
        return project;
      })

      return {
        ...prevState,
        projects: updatedProjects
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;
  if(projectsState.selectedProjectId === null)
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>;
  else if(projectsState.selectedProjectId === undefined)
    content = <DefaultHomePage onStartAddProject={handleStartAddProject}/>;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectID={projectsState.selectedProjectId}/>
      {content}
    </main>

  );
}

export default App;
