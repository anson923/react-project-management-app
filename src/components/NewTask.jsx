import {useRef, useState} from "react";

export default function NewTask({onSetTask}){
  const [enteredTask, setEnteredTask] = useState('');

  const handleOnAddTaskClicked = () => {
    if(enteredTask.trim() !== '')
      onSetTask({
        description: enteredTask,
        id: Math.random()
      });
    setEnteredTask('');
  }

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  }

  return(
    <div className="flex items-center gap-4">
      <input onChange={handleChange} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
      <button onClick={handleOnAddTaskClicked} className="text-stone-700 hover:text-stone-900">Add Task</button>
    </div>
  );
}