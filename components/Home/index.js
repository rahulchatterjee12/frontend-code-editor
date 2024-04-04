import React from "react";
import CodeEditor from "./CodeEditor";
import InputBox from "./InputBox";
import ExpectedOutputBox from "./ExpectedOutputBox";
import OutputBox from "./OutputBox";

const index = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-2 mx-2">
      <div className="col-span-3">
        <CodeEditor />
      </div>
      <div className="col-span-1 grid gap-1">
        <InputBox />
        <ExpectedOutputBox />
        <OutputBox />
      </div>
    </div>
  );
};

export default index;
