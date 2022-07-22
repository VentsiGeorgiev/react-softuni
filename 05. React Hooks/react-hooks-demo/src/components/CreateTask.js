import { useState } from "react";

function CreateTask({ taskCreateHandler }) {

  const [task, setNewTask] = useState('');


  const handleTask = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    taskCreateHandler(task);
    setNewTask('');
  }


  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskName"
        placeholder="Learn React..."
        value={task}
        onChange={handleTask}
      />
      <button>Add Task</button>
    </form>

  )
}

export default CreateTask