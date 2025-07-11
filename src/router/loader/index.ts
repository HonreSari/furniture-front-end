/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "react-router-dom";
import api, { authApi } from "@/api/index"; // assuming you're using Axios instance

export const loginLoader = async ({ request } : any) => {
  const url = new URL(request.url);
  if (url.searchParams.get("loggedOut")) {
    return null; // Skip auth check if just logged out
  }
  try {
    const response = await authApi.get("auth-check");
    if (response.status === 200) {
      // Only redirect if user is truly authenticated
      return redirect("/");
    }
    // If not authenticated, just render login page
    return null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // If error (e.g., 401), allow login page to render
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

export const protectedLoader = async ({ request }: { request: Request }) => {
  try {
    const res = await authApi.get("/auth-check");

    if (res.status === 200) {
      return null; // allow route
    }
    // fallback
    return redirect(`/login?redirect=${new URL(request.url).pathname}`);
  } catch (err: any) {
    return redirect(`/login?redirect=${new URL(request.url).pathname}`);
    throw new err;
  }
};
