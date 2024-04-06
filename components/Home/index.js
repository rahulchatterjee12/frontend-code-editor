"use client";
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import InputBox from "./InputBox";
import ExpectedOutputBox from "./ExpectedOutputBox";
import OutputBox from "./OutputBox";
import CodeList from "./CodeList";
import getAllCodes from "@/helper/code/getAllCodes";

const index = () => {
  const [input, setInput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);
  const [codes, setCodes] = useState([]);

  const fetchCodeFiles = () => {
    getAllCodes().then((res) => {
      setCodes(res.data);
    });
  };

  return (
    <div className="flex">
      <CodeList codes={codes} fetchCodeFiles={fetchCodeFiles} />
      <div className="grid grid-cols-4 w-full gap-2 mx-2">
        <div className="col-span-3">
          <CodeEditor
            input={input}
            output={output}
            setOutput={setOutput}
            expectedOutput={expectedOutput}
            setExpectedOutput={setExpectedOutput}
            loading={loading}
            setLoading={setLoading}
            fetchCodeFiles={fetchCodeFiles}
          />
        </div>
        <div className="col-span-1 grid gap-1">
          <InputBox input={input} setInput={setInput} loading={loading} />
          <ExpectedOutputBox
            expectedOutput={expectedOutput}
            setExpectedOutput={setExpectedOutput}
            loading={loading}
          />
          <OutputBox
            output={output}
            expectedOutput={expectedOutput}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
