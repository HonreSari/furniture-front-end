import Footer from "@/Components/layouts/Footer";
import Header from "@/Components/layouts/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mt-16"> 
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
