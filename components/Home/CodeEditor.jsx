"use client";

import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button, MenuItem, Select } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SaveIcon from "@mui/icons-material/Save";

const LanguageList = ["cpp", "java", "javascript", "python"];

const data = {
  user: "89as8d7fu98898asdf83",
  lang: "javascript",
  code: "console.log('hi')",
  filename: "test",
  inputs: "4",
  expected_output: "40",
  output: "40",
};

const CodeEditor = () => {
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState(data.lang);
  const [code, setCode] = useState(data.code);

  return (
    <>
      <div className="flex justify-between mx-3 my-1">
        <div>
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
              marginX: 2,
            }}
            size="small"
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Theme"
            value={language}
          >
            {LanguageList.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="">
          <Button
            sx={{ marginX: 2, gap: 1 }}
            size="small"
            variant="outlined"
            color="info"
          >
            <SaveIcon />
            Save
          </Button>
          <Button
            sx={{ gap: 1 }}
            size="small"
            variant="contained"
            color="success"
          >
            <PlayCircleFilledIcon />
            Run
          </Button>
        </div>
      </div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={(e) => setCode(e)}
        theme={theme}
      />
    </>
  );
};

export default CodeEditor;
