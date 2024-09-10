"use client";

import { useState } from "react";

// Utility function to generate random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 128);
  const g = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Panel({ clear, initialColor }) {
  const [split, setSplit] = useState(null);
  const [color, _setColor] = useState(initialColor || getRandomColor());

  // Base case: No split, just show the buttons
  if (!split) {
    return (
      <div
        className="h-full w-full flex items-center justify-center border-2 border-red-400"
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-2">
          <button
            onClick={() => setSplit("horizontal")}
            className="bg-teal-500 text-white px-4 py-2 rounded-md"
          >
            H
          </button>
          <button
            onClick={() => setSplit("vertical")}
            className="bg-lime-500 text-white px-4 py-2 rounded-md"
          >
            V
          </button>
          {clear}
        </div>
      </div>
    );
  }

  // Render panels dynamically based on the split type (horizontal or vertical)
  return (
    <div
      className={`h-full w-full flex ${
        split === "horizontal" ? "flex-col" : "flex-row"
      }`}
    >
      {/* First panel retains its color */}
      <div className="flex-1 border-2 border-teal-700">
        <Panel
          clear={
            <button
              onClick={() => setSplit(null)}
              className="bg-red-700 text-white px-4 py-2 rounded-md"
            >
              -
            </button>
          }
          initialColor={color} // Retain the original color
        />
      </div>

      {/* Second panel gets a new random color */}
      <div className="flex-1 border-2 border-rose-700">
        <Panel
          clear={
            <button
              onClick={() => setSplit(null)}
              className="bg-red-700 text-white px-4 py-2 rounded-md"
            >
              -
            </button>
          }
          initialColor={getRandomColor()} // Assign a new random color
        />
      </div>
    </div>
  );
}
