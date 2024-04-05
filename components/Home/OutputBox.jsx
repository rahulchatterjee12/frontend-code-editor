import React from "react";

const OutputBox = ({ output, expectedOutput }) => {
  return (
    <div className=" bg-gray-300 border-gray-400 border rounded text-center flex flex-col gap-2">
      <span className="font-mono pt-1 shadow-sm">Output Box</span>
      <div className="h-full bg-white border-t rounded border-gray-400 mt-1">
        {output}
        {expectedOutput && (
          <>
            {expectedOutput === output ? (
              <p className="text-green-600">Your output Matched</p>
            ) : (
              <p className="text-red-600">Your output is wrong</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OutputBox;
