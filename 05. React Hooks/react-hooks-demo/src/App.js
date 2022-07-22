import { TaskContext } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import styles from './App.module.css';
import CreateTask from './components/CreateTask';

import useFetch from './hooks/useFetch';
import useTodoApi from './hooks/useTodoApi';

function App() {

  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const res = await fetch("http://localhost:3030/jsonstore/todos/")
  //     const data = await res.json();
  //     setTasks(Object.values(data))
  //   }
  //   getTasks();
  // }, [])

  const [tasks, setTasks, isLoading] = useFetch("http://localhost:3030/jsonstore/todos/", []);

  const { removeTodo } = useTodoApi();



  const taskCreateHandler = (newTask) => {
    setTasks(prev => [...tasks, {
      _id: prev[prev.length - 1]?._id + 1 || 1,
      title: newTask
    }])
  }

  const taskDeleteHandler = async (taskId) => {
    await removeTodo(taskId)
    setTasks(state => state.filter(x => x._id != taskId))
  }

  return (
    <TaskContext.Provider value={{ taskDeleteHandler, tasks }}>
      <div className={styles.container}>
        <header>
          <h1>TODO App</h1>
        </header>

        <main>

          {isLoading
            ? 'Loading...'
            : <TaskList />
          }

          <CreateTask taskCreateHandler={taskCreateHandler} />


        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
