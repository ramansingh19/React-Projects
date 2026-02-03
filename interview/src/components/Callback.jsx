import React, { useCallback, useState } from "react";

function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <div className="backdrop-blur-lg bg-white/20 p-10 rounded-2xl 
                      shadow-2xl w-96 text-center border border-white/30">

        <h1 className="text-3xl font-bold text-white mb-2">
          useCallback Hook
        </h1>

        <p className="text-white/80 mb-6">
          Optimized Function Rendering
        </p>

        <div className="text-6xl font-extrabold text-white mb-8">
          {count}
        </div>

        <button
          onClick={handleClick}
          className="w-full py-3 rounded-xl text-lg font-semibold
                     bg-white text-purple-700
                     hover:bg-purple-700 hover:text-white
                     transform hover:scale-105
                     transition-all duration-300 shadow-lg"
        >
          🚀 Increment
        </button>

      </div>

    </div>
  );
}

export default Callback;
