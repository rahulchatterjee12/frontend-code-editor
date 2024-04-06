import axiosInstance from "@/utils/axiosInstance";

const createCode = async (data) => {
  try {
    const response = await axiosInstance.post(
      "/code/create",
      JSON.stringify(data)
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default createCode;
