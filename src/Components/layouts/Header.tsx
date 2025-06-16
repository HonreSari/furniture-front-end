import MainNavigation from "./MainNavigation";
import MobileNavigation from './MobileNavigation'
import { siteConfig } from "@/config/site";
export default function Header() {
  return (
    <header className="w-full border-b top-0 z-50 ">
      <nav className="container flex h-16 items-center mx-auto">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
      </nav>
    </header>
  ); 
}
