import React, { useRef, useEffect } from 'react'

// export default function RefHook2() {

//     const timerRef = React.useRef<number | null>(null);
//     // This is also a valid declaration
//     // const timerRef = React.useRef<number>()
  
//       useEffect(() => {
//           // Mutation of the `current` property
//           timerRef.current = setTimeout(/*...*/)
//           return clearInterval(timerRef.current)
//       }, [])
  
//     return (
//         <button onClick={/* clearInterval the ref */}>Cancel timer</button>
//     );
// }
