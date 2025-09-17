import React from 'react';

function Child(props) {
  return (
    <div>
      <h2>Hello, my name is {props.name}</h2>
      <p>I am {props.age} years old.</p>
    </div>
  );
}

export default Child;
