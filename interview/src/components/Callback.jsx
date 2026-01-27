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

//useCallback is a React Hook that memoizes a function, so React does not recreate that function on every render unless its dependencies change.