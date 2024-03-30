import React from "react";
import CodeEditor from "./CodeEditor";
import InputBox from "./InputBox";
import ExpectedOutputBox from "./ExpectedOutputBox";
import OutputBox from "./OutputBox";

const index = () => {
  return (
    <div className="flex">
      <div className="w-[60vw]">
        <CodeEditor />
      </div>
      <div className="flex flex-col justify-between w-[22vw]">
        <InputBox />
        <ExpectedOutputBox />
        <OutputBox />
      </div>
    </div>
  );
};

export default index;
