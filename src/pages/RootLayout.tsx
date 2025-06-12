import Header from "@/Components/layouts/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {

  return <div className="flex flex-col min-h-screen">
   <Header/>
   <Outlet/>
  </div>
}
