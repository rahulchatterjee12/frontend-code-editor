import axiosInstance from "@/utils/axiosInstance";
import { clearTokens, getTokens } from "@/utils/tokens";

const logout = async () => {
  const tokens = getTokens();
  try {
    const response = await axiosInstance.post(
      "/users/logout",
      JSON.stringify({ refreshTkn: tokens.refresh })
    );
    if (response.status === 205) {
      clearTokens();
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default logout;
