"use client";

import { useState } from "react";

export default function Alphabet() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    let newOutput = (outputString + letter).replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(newOutput);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Alphabet Tile Interaction</h1>

      <div className="grid grid-cols-6 gap-4 mb-8">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleTileClick(letter)}
            className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="text-xl p-4">
        <span id="outputString" className="font-mono">
          {outputString || "Click tiles to create a string"}
        </span>

        {outputString && (
          <button
            onClick={() => setOutputString("")}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md text-center font-medium shadow-md"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
