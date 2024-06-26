import axiosInstance from "@/utils/axiosInstance";

const getProfile = async () => {
  try {
    const response = await axiosInstance.get(`/users/me`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getProfile;
