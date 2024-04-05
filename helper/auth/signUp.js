import axios from "axios";
import axiosInstance from "@/utils/axiosInstance";

async function Signup(firstName, lastName, email, password) {
  try {
    const response = await axios.post(
      `${axiosInstance.defaults.baseURL}/users/signup`,
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
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
    console.error("Failed to signup");
  }
}

export default Signup;
