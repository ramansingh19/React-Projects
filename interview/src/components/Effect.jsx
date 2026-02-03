import React, { useEffect, useState, useRef } from 'react';

function Effect() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty deps: runs once, fixes infinite loop

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-8">
      <div className="relative w-full max-w-md">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse"></div>
        
        {/* Glass card */}
        <div className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <h1 className="text-5xl md:text-6xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-4 tracking-wider animate-pulse">
            {date}
          </h1>
          <p className="text-lg font-medium text-white/80 tracking-wide text-center">
            Live Clock - Delhi Time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Effect;
