import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import DefaultHomePage from "./components/DefaultHomePage.jsx";

function App() {
  const [newProjectVisible, setNewProjectVisible] = useState(false);
  const handleProjectVisible = (isVisible) => {
    setNewProjectVisible(isVisible);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar addProjectOnClick={() => handleProjectVisible(true)}/>
      {newProjectVisible ? <NewProject onCancelButtonClicked={() => handleProjectVisible(false)}/> : <DefaultHomePage addProjectOnClick={() => handleProjectVisible(true)}/>}
    </main>

  );
}

export default App;
