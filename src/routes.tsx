import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home.tsx";
import RootLayout from "@/pages/RootLayout.tsx";
import About from "@/pages/About";
import ErrorPage from "@/pages/Error.tsx";
// import BlogPage from "@/pages/Blogs/Blog";
// import blogdetailPage from "@/pages/Blogs/blogdetail";
// import blogRootLayout from "./pages/Blogs/blogRootLayout";
const BlogRootLayout = lazy(( ) => import("@/pages/Blogs/blogRootLayout"))
const BlogPage = lazy(( ) => import("@/pages/Blogs/Blog"))
const BlogdetailPage = lazy(( ) => import("@/pages/Blogs/blogdetail"))
import ProductRootLayouts from "./pages/Products/ProductRootLayouts";
import ProductPage from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: About },
      {
        path: "blogs",
        Component: BlogRootLayout,
        children: [
          { index: true, Component: BlogPage },
          { path: ":postId", Component: BlogdetailPage },
        ],
      },
        {
        path: "products",
        Component: ProductRootLayouts,
        children: [
          { index: true, Component: ProductPage },
          { path: ":productId", Component: ProductDetail },
        ],
      },
    ],
  },
]);
