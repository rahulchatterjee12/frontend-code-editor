import axios from "axios";

const runCode = async (data) => {
  try {
    const url = "http://localhost:8000/api/code/run";
    const headers = {
      "Content-Type": "application/json",
      "Content-Length": Infinity,
    };

    const res = await axios.post(url, {
      data: data,
      headers: headers,
    });
    if (res.status === 200) return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default runCode;
