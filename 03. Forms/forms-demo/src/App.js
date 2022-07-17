import { useState } from 'react';
import './App.css';

function App() {
  // const [username, setUsername] = useState('Peshi');
  // const [password, setPassword] = useState('');
  // const [age, setAge] = useState(0);
  // const [bio, setBio] = useState('');
  // const [gender, setGender] = useState('f');
  // const [userType, setUserType] = useState('corporate');
  // const [tac, setTac] = useState(true);

  const [values, setValues] = useState({
    username: '',
    password: '',
    age: '',
    bio: '',
    gender: 'f',
    userType: 'corporate',
    tac: false,
    egn: '',
    eik: '',

  });

  const changeHandler = (e) => {
    setValues(oldState => ({
      ...oldState,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }))
  }

  const checkboxChangeHandler = (e) => {
    console.log(e.target.name, ' - ', e.target.checked);

    setValues(oldState => ({
      ...oldState,
      [e.target.name]: e.target.checked
    }))
  }




  const submitHandler = (e) => {
    e.preventDefault();

    // let values = Object.fromEntries(new FormData(e.target))
    // console.log(values);

    // console.log('username: ', username);
    // console.log('password: ', password);
    // console.log('age: ', age);
    // console.log('gender: ', gender);
    // console.log('individual || Corporate: ');
    // console.log('terms and conditions: ', tac);


    console.log(values);
  }

  // const usernameChangeHandler = (e) => {
  //   setUsername(e.target.value);

  // }

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              id="username"
              type="text"
              onChange={changeHandler}
              value={values.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" type="password" value={values.password} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input name="age" id="age" type="number" value={values.age} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="bio">Biography:</label>
            <textarea name="bio" id="bio" cols="30" rows="6" value={values.bio} onChange={changeHandler}></textarea>
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="individual-user-type">Individual:</label>
            <input type="radio" name="userType" value="individual" id="individual-user-type" onChange={changeHandler} checked={values.userType === "individual"} />

            <label htmlFor="corporate-user-type">Corporate:</label>
            <input type="radio" name="userType" value="corporate" id="corporate-user-type" onChange={changeHandler} checked={values.userType === "corporate"} />
          </div>


          <div>
            <label htmlFor="identifier">{values.userType === 'individual' ? 'EGN' : 'EIK'}</label>
            {values.userType === 'individual'
              ? <input type='text' id='identifier' name='egn' value={values.egn} onChange={changeHandler} />
              : <input type='text' id='identifier' name='eik' value={values.eik} onChange={changeHandler} />
            }
          </div>

          <div>
            <label htmlFor="tac">Terms and Conditions:</label>
            <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={checkboxChangeHandler} />
          </div>

          <div>
            <input type="submit" value="Register" disabled={!values.tac} />
            {/* <button>Login</button> */}
          </div>
        </form>


      </header>
    </div>
  );
}

export default App;
