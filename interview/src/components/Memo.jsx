import React, { useMemo, useState } from 'react'

function Memo() {
  const [ count , setCount] = useState(0);

  const result = useMemo(() => {
    console.log("calculating...");
    return count * 2;
  }, [count]) 

  return (
    <div>
      <h2>{result}</h2>
      <button onClick={() => setCount(count + 3)}>Increase</button>
    </div>
  )
}

export default Memo