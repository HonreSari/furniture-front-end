import MainNavigation from "./MainNavigation";
import MobileNavigation from './MobileNavigation'
import { siteConfig } from "@/config/site";
import { ModeToggle } from "../mod-toggle";
export default function Header() {
  return (
    <header className="w-full border-b top-0 z-50 ">
      <nav className="container flex h-16 items-center mx-auto">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex flex-1 justify-end items-center space-x-4 mr-8 lg:mr-0 ">
        < ModeToggle />
        </div>
      </nav>
    </header>
  ); 
}
