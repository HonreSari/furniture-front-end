import {api} from "@/api";

export const homeLoader = async () => {
  try {
    const response = await api.get("admins/products");
    return response.data;
  } catch (error) {
    console.log("Failed to fetcch products", error);
  }
};
