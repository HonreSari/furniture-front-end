import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { AxiosError } from "axios";
import api, { authApi } from "@/api";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  // const authData = {
  //   phone: formData.get("phone"),
  //   password: formData.get("password"),
  // };
  try {
    const response = await authApi.post("login", credentials);
    if (response.status !== 200) {
      return { error: response.data || "login failed" };
    }
    // await fetch(import.meta.env.VITE_API_URL + "login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(credentials),
    //   credentials: "include",
    // });
    const redirectTo = new URL(request.url).searchParams.get("redirect") || "/";
    return redirect(redirectTo);
  } catch (error) {
    // throw error
    if (error instanceof AxiosError) {
      return error.response?.data || { error: "login failed" };
    } else throw error;
  }
};
export const logoutAction = async () => {
  try {
    await api.post("logout");
    return redirect("/login?loggedOut=true");
  } catch (error) {
    console.log("logout failed", error);
  }
};
