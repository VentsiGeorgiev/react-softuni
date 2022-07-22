import TaskList from './components/TaskList';
import styles from './App.module.css';
import CreateTask from './components/CreateTask';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch("http://localhost:3030/jsonstore/todos/")
      const data = await res.json();
      setTasks(Object.values(data))
    }
    getTasks();
  }, [])

  const taskCreateHandler = (newTask) => {
    setTasks(prev => [...tasks, {
      _id: prev[prev.length - 1]?._id + 1 || 1,
      title: newTask
    }])
  }

  const taskDeleteHandler = (taskId) => {
    setTasks(state => state.filter(x => x._id != taskId))
  }

  return (
    <div className={styles.container}>
      <header>
        <h1>TODO App</h1>
      </header>

      <main>

        <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler} />

        <CreateTask taskCreateHandler={taskCreateHandler} />


      </main>
    </div>
  );
}

export default App;
