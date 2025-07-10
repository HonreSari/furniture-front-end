import { redirect } from "react-router-dom";
import api, { authApi } from "@/api";

export const homeLoader = async () => {
  try {
    const response = await api.get("users/products");
    return response.data;
  } catch (error) {
    console.log("Failed to fetcch products", error);
  }
};

export const loginLoader = async () => {
  try {
    const response = await authApi.get("auth-check");
    if (response.status !== 200) {
      return null;
    }
    return redirect("/");
  } catch (error) {
    console.log("Loader error:", error);
  }
};
