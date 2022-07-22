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

  const { createTodo, removeTodo, patchTodo } = useTodoApi();



  const taskCreateHandler = async (newTask) => {
    const createdTask = await createTodo(newTask);
    setTasks(state => [
      ...state,
      createdTask
    ])
  }

  const taskDeleteHandler = async (taskId) => {
    await removeTodo(taskId)
    setTasks(state => state.filter(x => x._id != taskId))
  }

  const toggleTask = async (task) => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted }

    await patchTodo(task._id, updatedTask)
    setTasks(state => state.map(x => x._id == task._id
      ? updatedTask
      : x))
  }

  return (
    <TaskContext.Provider value={{ taskDeleteHandler, tasks, toggleTask }}>
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
