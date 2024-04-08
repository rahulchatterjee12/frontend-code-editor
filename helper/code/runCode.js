import axios from "axios";
import BASE_URL from "@/utils/constants/api";

const runCode = async (data) => {
  try {
    const url = `${BASE_URL}/code/run`;
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
