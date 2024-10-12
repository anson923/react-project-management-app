import NewTask from "./NewTask.jsx";
import {useState} from "react";

export default function Tasks({tasks, onAddTask, onDeleteTask}){

  const handleAddTask = (task) => {
    onAddTask(task)
  }

  const handleDeleteTask = (id) => {
    onDeleteTask(id);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onSetTask={handleAddTask}/>

      {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
      {tasks &&
      <ul>
        {
          tasks.map(task => {
            return (
              <div className="w-full flex justify-between my-4" key={task.id}>
                <li>{task.description}</li>
                <button className="text-stone-200 hover:text-stone-100 bg-stone-600 hover:bg-stone-500 rounded-md p-1" onClick={() => handleDeleteTask(task.id)}>DELETE</button>
              </div>
            );
          })
        }
      </ul>
      }
    </section>
  );
}