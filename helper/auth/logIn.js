import axios from "axios";
import axiosInstance from "@/src/utils/axiosInstance";

async function Login(data) {
  try {
    const response = await axios.post(
      `${axiosInstance.defaults.baseURL}/users/login`,
      JSON.stringify(data),
      {
        headers: {
          ...axiosInstance.defaults.headers,
          Authorization: null,
        },
        withCredentials: false,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Failed to Login");
  }
}

export default Login;
