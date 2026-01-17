import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Practice02() {
  const [counter , setCounter] = useState(0)

  const increase = () => {
    setCounter(counter+1);
  }
  // console.log(increase);

  useEffect(() => {
    console.log("mounted");
    return function() {
      console.log("unmounted");
    }
  } ,[])

    useEffect(() => {
      console.log("updated ");
      
    } , [counter])

  const decrease = () => {
    setCounter(counter-1)
    
  }
  // console.log(decrease);
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          {counter}
        </h1>

        <div className="flex justify-between gap-4">
          <button onClick={decrease} className="flex-1 bg-red-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
            Decrement
          </button>

          <button onClick={increase} className="flex-1 bg-green-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition" >
            Increment
          </button>
        </div>

      </div>
    </div>
  );
}

export default Practice02;
