import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const OutputBox = ({ output, expectedOutput, loading }) => {
  return (
    <div className=" bg-gray-300 border-gray-400 border rounded text-center flex flex-col gap-2">
      <span className="font-mono pt-1 shadow-sm">Output Box</span>
      {loading ? (
        <div className="h-full flex justify-center bg-white border-t rounded border-gray-400 mt-1 items-center">
          <CircularProgress size={30} color="info" />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default OutputBox;
