import { useState } from "react"

export default function Counter() {
  let [count , setCount] = useState(0)
  let incCount = () => {
    setCount(count + 1);
    console.log(count);
    
  }
  // let count = 0;
  // function incCounter(){
  //   count += 1;
  //   console.log(count);
    
  // }
  return(
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Counter</button>
    </div>
  )
}