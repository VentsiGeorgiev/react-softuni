import './App.css';

function App() {

  const submitHandler = (e) => {
    e.preventDefault();


    // const formData = new FormData(e.currentTarget);
    // const username = formData.get('username');
    // const password = formData.get('password');

    const { username, password } = Object.fromEntries(new FormData(e.currentTarget));

    console.log(username, password);


  }

  return (
    <div className="App">
      <header className="App-header">


        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username:</label>
            <input name="username" id="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" type="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
            {/* <button>Login</button> */}
          </div>
        </form>


      </header>
    </div>
  );
}

export default App;
