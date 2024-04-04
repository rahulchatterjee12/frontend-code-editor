import BASE_URL from "@/utils/constants/api";
import axios from "axios";

const runCode = async () => {
  let data = JSON.stringify({
    code: "print('hello')",
    input: "",
    language: "python",
  });

  let config = {
    method: "get",
    url: "http://localhost:8000/api/code/run",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      code: "print('hello')",
      input: "",
      language: "python",
    }),
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default runCode;
