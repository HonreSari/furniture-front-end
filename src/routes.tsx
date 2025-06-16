import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home.tsx";
import RootLayout from "@/pages/RootLayout.tsx";
import Contact from "@/pages/About";
import ErrorPage from "@/pages/Error.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, 
        Component: HomePage, 
        errorElement: <ErrorPage /> },
      { path: "contact", 
        Component: Contact },
    ],
  },
]);
