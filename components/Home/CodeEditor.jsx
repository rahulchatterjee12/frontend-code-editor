"use client";

import React, { useEffect, useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SaveIcon from "@mui/icons-material/Save";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { javascript } from "@codemirror/lang-javascript";
import runCode from "@/helper/code/runCode";
import { usePathname, useRouter } from "next/navigation";
import getCodeById from "@/helper/code/getCodeById";
import CircularProgress from "@mui/material/CircularProgress";
import createCode from "@/helper/code/createCode";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import updateCode from "@/helper/code/updateCode";

const LanguageList = ["cpp", "c", "python", "javascript"];

const getLang = (lang = "python") => {
  if (lang === "python") return [python({ py: true })];
  if (lang === "cpp") return [cpp({ cpp: true })];
  if (lang === "c") return [cpp({ c: true })];
  if (lang === "javascript") return [javascript({ jsx: true })];
};

const CodeEditor = ({
  input,
  output,
  setOutput,
  expectedOutput,
  setExpectedOutput,
  loading,
  setLoading,
  fetchCodeFiles,
}) => {
  const path = usePathname().split("/")[1];
  const [data, setData] = useState();
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState(
    data?.lang || `${!path ? "python" : ""}`
  );
  const [code, setCode] = useState(data?.code || "");
  const [filename, setFilename] = useState("");
  const [open, setOpen] = useState(false);
  const [loadingOnSave, setLoadingOnSave] = useState(false);
  const [loadingOnRun, setLoadingOnRun] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (path) {
      getCodeById(path).then((res) => {
        setData(res.data);
        setLanguage(res.data.language);
        setCode(res.data.code);
        setExpectedOutput(res.data.expected_output);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [path]);

  const onChange = React.useCallback((val, viewUpdate) => {
    setCode(val);
  }, []);

  const onRun = () => {
    setLoadingOnRun(true);
    const codeData = {
      code: code,
      input: input,
      language: language,
    };
    runCode(codeData).then((res) => {
      setOutput(res);
      setLoadingOnRun(false);
    });
  };

  const onSave = () => {
    if (path) {
      setLoadingOnSave(true);
      const data = {
        filename,
        code,
        input,
        language,
        expected_output: expectedOutput,
        output,
      };
      updateCode(path, data).then((res) => {
        setLoadingOnSave(false);
      });
    } else {
      setOpen(true);
    }
  };

  const addNewCode = () => {
    const data = {
      filename,
      code,
      input,
      language,
      expected_output: expectedOutput,
      output,
    };
    createCode(data).then((res) => {
      if (res?.status === 201) {
        fetchCodeFiles();
        setOpen(false);
        router.push(res.data._id);
        // router.push(res)
      }
    });
  };

  return (
    <>
      <div className="flex justify-between my-1 flex-wrap">
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              borderRadius: 4,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <TextField
              required
              label="Filename"
              placeholder="main"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
            />
            <div className="flex mt-2 justify-center gap-3">
              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
              <Button
                size="small"
                variant="contained"
                color="info"
                type="submit"
                onClick={addNewCode}
              >
                Create
              </Button>
            </div>
          </Box>
        </Modal>
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
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => {
              setCode("");
              setData();
              router.push("/");
            }}
          >
            Reset
          </Button>
          <Button
            sx={{ gap: 1 }}
            size="small"
            variant="outlined"
            onClick={onSave}
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
