/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "react-router-dom";
import api, { authApi } from "@/api/index"; // assuming you're using Axios instance

export const loginLoader = async ({ request }: { request: Request }) => {
  try {
    const res = await authApi.get("/auth-check");

    if (res.status === 200) {
      // Already authenticated → redirect to the target or home
      const redirectTo =
        new URL(request.url).searchParams.get("redirect") || "/";
      return redirect(redirectTo);
    }

    return null;
  } catch (err: any) {
    // Not authenticated → allow login page to render
    if (err.response?.status === 401) {
      return null;
    }

    throw new Response("Something went wrong", { status: 500 });
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
