import React from "react";

const InputBox = ({ input, setInput }) => {
  return (
    <div className="bg-gray-300 border-gray-400 border rounded text-center flex flex-col gap-2">
      <span className="font-mono pt-1 shadow-sm">Input Box</span>
      <textarea
        placeholder="Enter your input (optional)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-full bg-white border-t rounded border-gray-400 mt-1"
      />
    </div>
  );
};

export default InputBox;
