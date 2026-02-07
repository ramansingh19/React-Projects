import React, { memo, useCallback, useState } from 'react'

const Button = memo(({children, onclick}) => {
    console.log(`Rendering button : ${children} `);

    return (
        <button 
            onClick={onclick}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
        >
            {children}
        </button>
    );
}) 

function Callback() {
  const [count , setCount ] = useState(0);

  const increment = useCallback(() => {
    console.log(`increment inside`);
    setCount((preCount) => preCount + 1)
  }, [])

  const decrement = useCallback(() => {
    console.log(`Decrement inside `);
    setCount(preCount => {
      if (preCount > 0) {
        return preCount -1 ;
      }
      return preCount;
    }) 
     
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text mb-12 drop-shadow-2xl">
          Counter
        </h1>
        <div className={`inline-block text-7xl font-black p-8 rounded-2xl mb-10 transition-all duration-700 ${
          count > 0 ? 'text-emerald-400 shadow-emerald-500/50' : 
          count < 0 ? 'text-red-400 shadow-red-500/50' : 
          'text-cyan-400 shadow-cyan-500/50'
        }`}>
          {count}
        </div>
        <div className="space-y-4">
          <Button onclick={increment}>Increment</Button>
          <Button onclick={decrement}>Decrement</Button>
        </div>
      </div>
    </div>
  )
}

export default Callback



//without callback when we click on button it create new instance so it show both increment and decremet ,,
//when we use callback after one click it memorize the functon and help to not re-render button again and again