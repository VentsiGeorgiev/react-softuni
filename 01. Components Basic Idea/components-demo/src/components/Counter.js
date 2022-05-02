import { useState } from 'react';

function Counter() {
   let [count, setCount] = useState(0);

   const addButtonClickHandler = () => setCount(count + 1);

   return (
      <>
         <h2>Counter</h2>

         <ul>
            <li>{count}</li>
         </ul>

         <button onClick={() => setCount(count + 1)}>Add</button>
         <button onClick={setCount.bind(null, count + 1)}>Add</button>
         <button onClick={addButtonClickHandler}>Add</button>
      </>
   );
}

export default Counter;