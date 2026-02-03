import React, { useState } from 'react';

function State() {
  const [count, setCount] = useState(0);

  const handlebtn = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const getCountColor = () => {
    if (count > 0) return 'text-green-400 drop-shadow-green-500';
    if (count < 0) return 'text-red-400 drop-shadow-red-500';
    return 'text-white drop-shadow-2xl';
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 max-w-md w-full text-center transition-all duration-300 hover:shadow-3xl">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 tracking-wide uppercase">Counter</h1>
        <p className={`text-7xl font-black mb-12 transition-all duration-500 transform hover:scale-105 ${getCountColor()}`}>
          {count}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handlebtn}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95 min-w-[120px]"
          >
            +
          </button>
          <button
            onClick={handleDec}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95 min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={count === 0}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default State;
