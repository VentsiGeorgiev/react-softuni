// import { useEffect } from 'react';
import styles from './TodoItem.module.css';

export default function TodoItem({
   todo,
   onDelete,
   onClick
}) {

   // console.log(`${id} - Updated`);
   // useEffect(() => {
   //    console.log(id + ' - Mounted');
   //    return () => {
   //       console.log(id + ' Unmount');
   //    }
   // }, [todo.id]);

   return (
      <li onClick={() => onClick(todo.id)} className={todo.isDone ? styles['todo-item-done'] : ''}>
         {todo.text}
         <button onClick={() => onDelete(todo.id)}>x</button>
      </li>
   );
}