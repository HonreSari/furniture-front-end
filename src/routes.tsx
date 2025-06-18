import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home.tsx";
import RootLayout from "@/pages/RootLayout.tsx";
import About from "@/pages/About";
import BlogPage from "@/pages/Blogs/Blog";
import blogdetailPage from "@/pages/Blogs/blogdetail";
import ErrorPage from "@/pages/Error.tsx";
import blogRootLayout from "./pages/Blogs/blogRootLayout";

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
        Component: blogRootLayout,
        children: [
          { index: true, Component: BlogPage },
          { path: ":postId", Component: blogdetailPage },
        ],
      },
    ],
  },
]);
