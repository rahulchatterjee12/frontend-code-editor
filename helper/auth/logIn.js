import axios from "axios";
import axiosInstance from "@/utils/axiosInstance";

async function Login(email, password) {
  try {
    const response = await axios.post(
      `${axiosInstance.defaults.baseURL}/users/login`,
      JSON.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          ...axiosInstance.defaults.headers,
          Authorization: null,
        },
        withCredentials: false,
      }
    );
    return response;
  } catch (error) {
    console.error("Failed to Login", error);
  }
}

export default Login;
