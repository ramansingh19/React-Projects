import React, { useCallback, useState } from 'react'

function Callback() {
  const[count , setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
    
  } , [count])
  return (
     <button onClick={handleClick}>click</button>
  )
}

export default Callback