import axiosInstance from "@/utils/axiosInstance";

const deleteCode = async (id) => {
  try {
    const response = await axiosInstance.delete(`/code/delete/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default deleteCode;
