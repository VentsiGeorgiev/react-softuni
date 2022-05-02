import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>

      <main>
        <TodoList />
        <Counter />
      </main>

    </div>
  );
}

export default App;