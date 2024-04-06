import axiosInstance from "@/utils/axiosInstance";

const getCodeById = async (id) => {
  try {
    const response = await axiosInstance.get(`/code/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getCodeById;
