import { Link } from "react-router-dom";
import type { MainNavItem } from "@/Types";
import { Icons } from "@/Components/icons";
import { siteConfig } from "@/config/site";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/Components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { useEffect, useState } from "react";

interface MainNavigationProps {
  items?: MainNavItem[];
}

export default function MobileNavigation({ items }: MainNavigationProps) {
    const [isDesktop, setIsDesktop] = useState(false);
  const query = "(min-width: 1024px)";

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setIsDesktop(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    return () => result.removeEventListener("change", onChange);
  }, [query]);

  if (isDesktop) {
    return null;
  }
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pt-9 px-4">
          <SheetClose asChild>
            <Link to="/" className="flex items-center">
              <Icons.logo className="mr-2 size-4" />
              <span className="font-bold ">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
            <Accordion type="multiple" className="w-full shadow-xs">
              <AccordionItem value="item-1">
                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-2 mt-4">
                    {items?.[0].card?.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          to={String(item.href)}
                          className="text-foreground/70 font-light"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-4 flex flex-col space-y-2">
              {items?.[0].menu?.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link to={String(item.href)} className="">
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
