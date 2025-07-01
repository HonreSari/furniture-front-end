import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "../mod-toggle";
import AuthdropDown from "./AuthdropDown";
import { User } from "@/data/user";
import {CartSheet} from "./CartSheet";
export default function Header() {
  return (
    <header className="bg-background fixed z-50 w-full border-b px-4 lg:px-8">
      <nav className="container mx-auto flex h-16 items-center px-4 lg:px-8">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mr-8 flex flex-1 items-center justify-end space-x-4 lg:mr-0">
          <CartSheet />
          <ModeToggle />
          <AuthdropDown user={User}/>
        </div>
      </nav>
    </header>
  );
}
