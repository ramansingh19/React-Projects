import React from 'react'
import { useRef } from 'react'

function UncontrolledCom() {
  const inputref = useRef();
  
  function handleSubmit() {
    alert(inputref.current.value)
  }
  return (
    <div>
      <input type="text"  ref={inputref}/>
      <button onClick={handleSubmit}>click</button>
    </div>
    
  )
}

export default UncontrolledCom
