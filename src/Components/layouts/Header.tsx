import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
// import { siteConfig } from "@/config/site" 
export default function Header() {
  return (
    <header className="w-full border-b">
      <nav className="container flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav}  />
      </nav>
    </header>
  );
}
