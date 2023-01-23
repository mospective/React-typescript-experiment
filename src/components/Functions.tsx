import React from 'react'

export default function Functions() {

    // Anonymous function
    let Sum = function(x: number, y: number): string {
        return `The total for ${x} + ${y} is ${ x + y}`; 
    }

    Sum(5, 3);
    
    function Greet(greeting: string, name?: string ) : string {
        return greeting + ' ' + name + '!';
    }

  return (
    <div>Functions</div>
  )
}
