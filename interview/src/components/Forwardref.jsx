import React from 'react'
import { useRef , forwardRef } from 'react'

const Input =  forwardRef((props , ref) => {
    return <input ref={ref}/>
  })
function Forwardref() {
  
  const inputref = useRef();

  function focusinput(){
    inputref.current.focus();
  }
  
  return (
    <div>
      <Input ref={inputref} />
      <button onClick={focusinput}>click</button>
    </div>
  )
}

export default Forwardref