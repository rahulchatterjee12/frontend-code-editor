"use client";

import React, { useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SaveIcon from "@mui/icons-material/Save";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { javascript } from "@codemirror/lang-javascript";
import runCode from "@/helper/code/runCode";

const LanguageList = ["cpp", "c", "python", "javascript"];

const data = {
  user: "89as8d7fu98898asdf83",
  lang: "python",
  code: "",
  filename: "test",
  inputs: "4",
  expected_output: "40",
  output: "40",
};

const getLang = (lang = "python") => {
  if (lang === "python") return [python({ py: true })];
  if (lang === "cpp") return [cpp({ cpp: true })];
  if (lang === "c") return [cpp({ c: true })];
  if (lang === "javascript") return [javascript({ jsx: true })];
};

const CodeEditor = () => {
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState(data.lang || "python");
  const [code, setCode] = useState(data.code);

  const onChange = React.useCallback((val, viewUpdate) => {
    setCode(val);
  }, []);

  const onRun = () => {
    const codeData = {
      code: code,
      input: "",
      language: "python",
    };
    runCode(codeData);
  };

  return (
    <>
      <div className="flex justify-between my-1 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          <Select
            sx={{
              height: 33,
              width: 150,
            }}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Language"
            value={theme}
          >
            <MenuItem value="enum">Light</MenuItem>
            <MenuItem value="vs-dark">Dark</MenuItem>
          </Select>
          <Select
            sx={{
              height: 33,
              width: 150,
            }}
            size="small"
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Theme"
            value={language}
          >
            {LanguageList.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button sx={{ gap: 1 }} size="small" variant="outlined" color="info">
            <SaveIcon />
            Save
          </Button>
          <Button
            sx={{ gap: 1 }}
            size="small"
            variant="contained"
            color="success"
            onClick={onRun}
          >
            <PlayCircleFilledIcon />
            Run
          </Button>
        </div>
      </div>
      <div className="">
        <CodeMirror
          value={code}
          height="540px"
          extensions={getLang(language)}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default CodeEditor;
