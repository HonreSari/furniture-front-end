import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import ContactPage from "./pages/Contact.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, 
        Component: HomePage  },
      { path: "contact", Component: ContactPage  },
    ],
  },
]);
