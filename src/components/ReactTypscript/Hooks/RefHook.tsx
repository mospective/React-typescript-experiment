import React, {useRef, useEffect} from 'react'
import "./index.css";

export default function RefHook() {
    
    const currentRef = useRef<HTMLDivElement>(null!);

    currentRef.current.style.backgroundColor = "#ffffff";

    // useEffect(() => {
    //     if (!currentRef.current) throw Error("divRef is not assigned");

    //     currentRef.current.style.backgroundColor = "#ffffff"
    // });

  return (
    <div>
        <h3>Ref (Read-only) referencing the DOM element</h3>
        <div className="square" ref={currentRef}></div>
    </div>
  )
}
