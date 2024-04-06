import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ExpectedOutputBox = ({ expectedOutput, setExpectedOutput, loading }) => {
  return (
    <div className=" bg-gray-300 border-gray-400 border rounded text-center flex flex-col gap-2">
      <span className="font-mono pt-1 shadow-sm">Expected Output Box</span>
      {loading ? (
        <div className="h-full flex justify-center bg-white border-t rounded border-gray-400 mt-1 items-center">
          <CircularProgress size={30} color="info" />
        </div>
      ) : (
        <textarea
          value={expectedOutput}
          onChange={(e) => setExpectedOutput(e.target.value)}
          placeholder="Enter your expected output (optional)"
          className="h-full bg-white border-t rounded border-gray-400 mt-1"
        />
      )}
    </div>
  );
};

export default ExpectedOutputBox;
