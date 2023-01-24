import React, { useEffect, useState } from 'react'

export default function EffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setCount(count => count + 1);
            console.log(count);
        }, 1500);

        return () => {
            clearTimeout(timer);
        }

    },[]);

  return null;
}
