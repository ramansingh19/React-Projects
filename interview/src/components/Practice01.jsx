import React from 'react'
import { useState } from 'react';

function Practice01() {
  const [value , setValue] = useState(0)
    // const [multipliedvalue , setMultipliedvalue] = useState(1)
    let multipliedvalue = value * 5;
    const multiply = () => {
      // setMultipliedvalue(value * 5);
      setValue(value + 1)
    }


  return (
    <div>
      <h1>Main  value : {value} </h1>
      <button 
      onClick={multiply}
      >click by 5 </button>
      <h1>final result : {multipliedvalue} </h1>
    </div>
  )
}

export default Practice01