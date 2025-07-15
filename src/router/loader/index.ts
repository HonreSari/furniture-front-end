import { redirect } from "react-router";
import api, { authApi } from "@/api/index"; // assuming you're using Axios instance
import { Status, useAuthStore } from "@/store/authStore";

export const loginLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  if (url.searchParams.get("loggedOut")) {
    // User just logged out, skip auth-check and allow login page to render
    return null;
  }
  try {
    const response = await authApi.get("auth-check");
    if (response.status === 200) {
      return redirect("/");
    }
    return null;
  } catch (error) {
    console.log("Loader error:", error);
    return null;
  }
};

export const homeLoader = async () => {
  try {
    const response = await api.get("users/products");
    return response.data;
  } catch (error) {
    console.log("Failed to fetcch products", error);
  }
};

export const otpLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.otp) {
    return redirect("/register");
  }

  return null;
};

export const confirmLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.confirm) {
    return redirect("/register");
  }

  return null;
};