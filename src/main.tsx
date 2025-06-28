import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes.tsx";
import { ThemeProvider } from "@/Components/theme-provider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <Suspense fallback={<div>Loading blog content...</div>}>
          <RouterProvider router={routes} />
          </Suspense>
    </ThemeProvider>
  </StrictMode>,
);
