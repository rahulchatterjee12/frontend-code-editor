import axiosInstance from "@/utils/axiosInstance";

const getProfile = async () => {
  const response = await axiosInstance.get(`/users/me`);
  console.log(response);
};

export default getProfile;
