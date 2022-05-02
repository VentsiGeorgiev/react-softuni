import TodoListItem from './TodoListItem';
import { useState } from 'react';
// import React from 'react';

function TodoList() {

   // let todoState = React.useState(['Read a book!', 'Learn React!', 'Components: Basic Idea']);
   // let [todos, setTodos] = React.useState(['Read a book!', 'Learn React!', 'Components: Basic Idea']);
   let [todos, setTodos] = useState(['Read a book!', 'Learn React!', 'Components: Basic Idea']);
   let [name, setName] = useState('');
   // let todos = todoState[0];
   // let setTodos = todoState[1];
   const inputChangeHandler = (e) => {
      setName(e.target.value)
   }

   return (
      <>
         <h2>Tasks</h2>
         <ul>
            {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)}

            <h3>Counter name - {name}</h3>
            {name == 'Important'
               ? <h3>Fist do this!</h3>
               : null};

            {/* <TodoListItem color='red'>Read a book!</TodoListItem>
            <TodoListItem>Learn React!</TodoListItem>
            <TodoListItem>Components: Basic Idea"</TodoListItem> */}
            <p>
               <label htmlFor="">Add Task</label>
               <input type="text" onChange={inputChangeHandler} />
            </p>


            <button onClick={() => setTodos(['Done!', 'Done!', 'Done!'])}>Done!</button>
         </ul>

      </>
   );
}

export default TodoList;