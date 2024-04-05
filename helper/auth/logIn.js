import axios from "axios";
import axiosInstance from "@/utils/axiosInstance";

async function Login(email, password) {
  try {
    const response = await axios.post(
      `${axiosInstance.defaults.baseURL}/users/login`,
      JSON.stringify({
        email: "rahul.chatterjee@runway.org.in",
        password: "12345",
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
    console.error("Failed to Login");
  }
}

export default Login;
