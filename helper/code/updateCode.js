import axiosInstance from "@/utils/axiosInstance";

const updateCode = async (id, data) => {
  try {
    const response = await axiosInstance.patch(
      `/code/update/${id}`,
      JSON.stringify(data)
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default updateCode;
