import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { AxiosError } from "axios";
import  { authApi } from "@/api";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const authData = {
    phone: formData.get("phone"),
    password: formData.get("password"),
  };
  try {
    const response = await authApi.post("login", authData);
    if (response.status !== 200) {
      return { error: response.data || "login failed" };
    }
    const redirectTo = new URL(request.url).searchParams.get("redirect") || "/";
    return redirect(redirectTo);
  } catch (error) {
    // throw error
    if (error instanceof AxiosError) {
      return error.response?.data || { error: "login failed" };
    } else throw error;
  }
};
