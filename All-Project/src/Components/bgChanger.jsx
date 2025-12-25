import React, { useState } from "react";

export default function Bgchanger() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      {/* Spacer to allow sticky to work nicely */}
      <div className="h-full flex items-end">
        
        {/* Color Palette */}
        <div className="sticky bottom-6 w-full flex justify-center px-4">
          <div className="flex flex-wrap gap-3 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl">
            
            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="px-5 py-2 rounded-full text-black font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>

            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>

            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>

            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "grey" }}
              onClick={() => setColor("grey")}
            >
              Grey
            </button>

            <button
              className="px-5 py-2 rounded-full text-white font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>

            <button
              className="px-5 py-2 rounded-full text-black font-medium shadow-md hover:scale-105 transition"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >
              Lavender
            </button>

            <button
              className="px-5 py-2 rounded-full text-black font-medium shadow-md hover:scale-105 transition border"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
