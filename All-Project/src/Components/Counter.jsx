import { useState } from "react";

export default function Counterr() {
  const [counter, setCounter] = useState(0);

  // Increase counter
  const incCounter = () => {
    setCounter(prev => Math.min(prev + 1, 20));
  };

  // Decrease counter
  const decCounter = () => {
    setCounter(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-80 text-center">
        
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>

        <p className="text-5xl font-semibold mb-6 text-blue-400">
          {counter}
        </p>

        <div className="flex justify-between gap-4">
          <button
            onClick={decCounter}
            className="flex-1 bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg font-medium"
          >
            Decrease
          </button>

          <button
            onClick={incCounter}
            className="flex-1 bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-medium"
          >
            Increase
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Range: 0 to 20
        </p>
      </div>
    </div>
  );
}
