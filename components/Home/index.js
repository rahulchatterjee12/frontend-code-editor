"use client";
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import InputBox from "./InputBox";
import ExpectedOutputBox from "./ExpectedOutputBox";
import OutputBox from "./OutputBox";

const index = () => {
  const [input, setInput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="grid grid-cols-4 w-full gap-2 mx-2">
      <div className="col-span-3">
        <CodeEditor input={input} setOutput={setOutput} />
      </div>
      <div className="col-span-1 grid gap-1">
        <InputBox input={input} setInput={setInput} />
        <ExpectedOutputBox
          expectedOutput={expectedOutput}
          setExpectedOutput={setExpectedOutput}
        />
        <OutputBox output={output} expectedOutput={expectedOutput} />
      </div>
    </div>
  );
};

export default index;
