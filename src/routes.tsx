import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home.tsx";
import RootLayout from "@/pages/RootLayout.tsx";
import About from "@/pages/About";
import ErrorPage from "@/pages/Error.tsx";
// import BlogPage from "@/pages/Blogs/Blog";
// import BlogdetailPage from "@/pages/Blogs/blogdetail";
// import BlogRootLayout from "./pages/Blogs/blogRootLayout";
const BlogRootLayout = lazy(() => import("@/pages/Blogs/blogRootLayout"));
const BlogPage = lazy(() => import("@/pages/Blogs/Blog"));
const BlogdetailPage = lazy(() => import("@/pages/Blogs/blogdetail"));
import ProductRootLayouts from "./pages/Products/ProductRootLayouts";
import ProductPage from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import { homeLoader } from "@/router/loader";
import { loginAction, logoutAction } from "@/router/actions";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Compnent = RootLayout
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      { path: "about", element: <About /> },
      {
        path: "blogs",
        element: (
          <Suspense
            fallback={
              <div className="text-center text-2xl font-bold">
                Loading blogs...
              </div>
            }
          >
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-bold">
                    Loading blog page...
                  </div>
                }
              >
                <BlogPage />
              </Suspense>
            ),
            loader: async () => {
              const { posts } = await import("@/data/posts");
              return posts;
            },
          },
          {
            path: ":postId",
            element: (
              <Suspense fallback={<div>Loading blog detail...</div>}>
                <BlogdetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductRootLayouts />
          </Suspense>
        ),
        children: [
          { index: true, element: <ProductPage /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/logout",
    action : logoutAction,
    
  }
]);
