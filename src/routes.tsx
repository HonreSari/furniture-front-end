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

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<div>Loading blogs...</div>}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading blog page...</div>}>
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
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
