import TaskList from './components/TaskList';
import styles from './App.module.css';
import CreateTask from './components/CreateTask';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
      _id: 1,
      title: 'Learn JS'
    },
    {
      _id: 2,
      title: 'Learn HTML & CSS'
    },
    {
      _id: 3,
      title: 'Learn React'
    },
  ]);

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
