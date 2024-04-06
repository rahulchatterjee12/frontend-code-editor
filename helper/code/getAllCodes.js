import axiosInstance from "@/utils/axiosInstance";

const getAllCodes = async () => {
  try {
    const response = await axiosInstance.get("/code");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllCodes;
