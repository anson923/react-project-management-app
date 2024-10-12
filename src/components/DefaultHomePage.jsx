import mainIcon from "../assets/no-projects.png";
import Button from "./Button.jsx";
export default function DefaultHomePage({onStartAddProject}){
  return (
    <div className="text-center mt-24 w-2/3">
      <img className="size-16 object-contain mx-auto" src={mainIcon} alt="homepageLogo"/>
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected.
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}