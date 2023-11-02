import React from "react";

function LineProgressTracker({ type, qCount, totalQCount, color }) {
  return (
    <div className="w-full grid grid-cols-3 gap-2  min-w-[200px]">
      <div className="font-medium col-span-2">
        <div>{type}</div>
        <div className="h-2 bg-white rounded-md">
          <div
            className="h-2 w-full rounded-md"
            style={{
              background: color,
              width: `${(qCount / totalQCount) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      

      <div
        style={{ backgroundColor: color }}
        className="px-2 col-span-1 py-1 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
      >
        {qCount}/{totalQCount}
      </div>
    </div>
  );
}

export default LineProgressTracker;
