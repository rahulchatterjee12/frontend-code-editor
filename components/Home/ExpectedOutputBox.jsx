import React from "react";

const ExpectedOutputBox = ({ expectedOutput, setExpectedOutput }) => {
  return (
    <div className=" bg-gray-300 border-gray-400 border rounded text-center flex flex-col gap-2">
      <span className="font-mono pt-1 shadow-sm">Input Box</span>
      <textarea
        value={expectedOutput}
        onChange={(e) => setExpectedOutput(e.target.value)}
        placeholder="Enter your expected output (optional)"
        className="h-full bg-white border-t rounded border-gray-400 mt-1"
      />
    </div>
  );
};

export default ExpectedOutputBox;
