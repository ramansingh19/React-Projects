import { useState } from "react";

export default function Counterr() {

let [counter , setCounter ] = useState(0)

  // let counter = 5;

  //increase the value 
  const incCounter = () => {
    if (counter >= 20) {
      return
    }else{
      counter += 1;
      setCounter(counter)
      console.log(counter);
    }
    
  }

  //decrease the value

  const decCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);

    //ek sath pss ek hii pass hota hai 
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    return;
  }

  // const decCounter = () => {
  //   setCounter((prev) => {
  //     if (prev <= 0) return 0;   // stop at 0
  //     return prev - 1;
  //   });
  // };


  // const decCounter = () => {
  //   if (counter < 1) {
  //     return;
  //   }else{
  //     counter -= 1;
  //     setCounter(counter)
  //     console.log(counter);
  //   }
    
  // }


  return (
    <>
    <h1>Counter</h1>
    <h2>Counter is : {counter}</h2>
    <button onClick={incCounter}>Increase</button>
    <br />
    <button onClick={decCounter}>Decrease</button>
    </>
  )

}

