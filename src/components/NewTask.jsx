import {useRef} from "react";

export default function NewTask({onSetTask}){
  const taskTextRef = useRef(null);
  const buttonRef = useRef(null);

  const handleOnAddTaskClicked = () => {
    const enteredTask = taskTextRef.current.value;
    if(enteredTask.trim() !== '')
      onSetTask({
        description: enteredTask,
        id: Math.random()
      });

    buttonRef.current.value = '';
  }

  return(
    <div className="flex items-center gap-4">
      <input ref={taskTextRef} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
      <button ref={buttonRef} onClick={handleOnAddTaskClicked} className="text-stone-700 hover:text-stone-900">Add Task</button>
    </div>
  );
}