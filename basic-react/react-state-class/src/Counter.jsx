import { useState } from "react"

function init(){
    console.log('init was executed');
    return Math.random()
    
  }

export default function Counter() {
  let [count , setCount] = useState(init)
  console.log('Outer rendering');

  
  
  let incCount = () => {
    //it will give you , depend on the currcount function you have.
    setCount((currCount) => {
        return currCount + 1;
    });
    // setCount((currCount) => {
    //     return currCount + 1;
    // });

    //in this process we did not increase by 3 it increase by 1
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // console.log(`count  : ${count}`);
    
  }
  //method to update the count value
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