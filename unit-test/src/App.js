import logo from './logo.svg';
import './App.css';

function App() {
  let a = 5;
  let b = 5;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
        </ul>


        <h1 data-testid="heading">My App</h1>

        <span title="sum">{a + b}</span>

      </header>
    </div>
  );
}

export default App;
