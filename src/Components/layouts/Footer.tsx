import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { Icons } from "@/Components/icons";
import { ProfileForm } from "../new-letter";

export default function Footer() {
  return (
    <footer className="w-full border-t px-4 lg:px-8">
      <div className="container mx-auto pt-6 pb-8">
        <section className="flex flex-col gap-10 lg:justify-between lg:flex-row lg:gap-20">
          <section className="">
            <Link to="/" className="flex items-center space-x-2">
              <Icons.logo className="size-6" aria-hidden="true" />
              <span>{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 gap-6 font-light md:grid-cols-4 lg:grid-cols-4">
            {siteConfig.footerNav.map((footer) => (
              <div key={footer.title} className="space-y-3">
                <h4 className="font-semibold">{footer.title}</h4>
                <ul>
                  {footer.items.map((item) => (
                    <li
                      key={item.title}
                      className="text-foreground/70 p-1 hover:text-gray-800"
                    >
                      <Link
                        to={item.href}
                        target={item.external ? "_blank" : undefined}
                      >
                        {item.title}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <ProfileForm />
        </section>
      </div>
    </footer>
  );
}
