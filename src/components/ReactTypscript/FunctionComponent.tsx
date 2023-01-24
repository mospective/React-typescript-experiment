import React from 'react'

type TypeProps = {
    message: string;
};

export default function FunctionComponent({ message }: TypeProps) {
  return (
    <>
        <div>FunctionComponent</div>
        <p>Here is a message:</p>
        <p>{ message }</p>
    </>
  )
}
