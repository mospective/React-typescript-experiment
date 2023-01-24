import React, {useState} from 'react'

export default function StateHook() {
   const [count, setCount] = useState(0);

   const addCountHandler = () => {
    setCount(count + 1);
   }

   const removeCountHandler = () => {
    if (count === 0) {
        return;
    }

    setCount(count - 1)
   }
    
  return (
    <>
    <p>Counter 2</p>
     <p>{ count }</p>
     <button onClick={addCountHandler}>+</button>
     <button onClick={removeCountHandler}>-</button>
    </>

  )
}
