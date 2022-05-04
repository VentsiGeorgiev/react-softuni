import { useState } from 'react';
import uniqid from 'uniqid';
import TodoItem from './TodoItem';

export default function TodoList() {
   const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React Components', isDone: false },
      { id: 2, text: 'Learn React Routing', isDone: false },
      { id: 3, text: 'Learn React Forms', isDone: false },
   ]);

   // console.log('Render');

   // useEffect(() => {
   //    console.log('Mounted');
   // }, []);


   const addTodoHandler = (e) => {
      let todo = {
         id: uniqid(),
         text: e.target.value,
         isDone: false
      }

      setTodos(state => [
         ...state,
         todo
      ]);

      e.target.value = '';
   };

   const deleteItemClickHandler = (id) => {
      // console.log('Delete ' + id);
      setTodos(todos => todos.filter(todo => todo.id !== id));
   };

   const toggleTodoItemClickHandler = (id) => {
      // console.log('toggled');
      setTodos(todos => {
         let selectedTodo = todos.find(x => x.id === id);
         let selectedIntex = todos.findIndex(x => x.id === id);
         let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone }

         return [
            ...todos.slice(0, selectedIntex),
            toggledTodo,
            ...todos.slice(selectedIntex + 1)
         ];
      });
   }


   return (
      <>
         <label htmlFor="name-todo">Add Todo</label>
         <input type="text" onBlur={addTodoHandler} name='todo' />
         <ul>
            {todos.map(todo =>
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteItemClickHandler}
                  onClick={toggleTodoItemClickHandler}
               />
            )}
         </ul>
      </>

   );
}

