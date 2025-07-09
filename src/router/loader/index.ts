import api, { authApi } from "@/api";
import { redirect } from "react-router-dom";

export const homeLoader = async () => {
  try {
    const response = await api.get("users/products");
    return response.data;
  } catch (error) {
    console.log("Failed to fetcch products", error);
  }
};

export const loginLoader = async () => {
  // token ရှိ/မရှိ client-side မှာစစ်ပါ
  const token = localStorage.getItem("token");
  if (!token) {
    // token မရှိရင် login page ကိုထားပါ
    return null;
  }
  // token ရှိမှသာ auth-check API ကို call လုပ်ပါ
  try {
    const response = await authApi.get("auth-check");
    if (response.status === 200) {
      return redirect("/");
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
