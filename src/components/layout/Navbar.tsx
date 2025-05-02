import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationLink, Logo } from "@/components/ui/extra";
import { ModeToggle, LanguageToggle } from "@/components/ui/extra";

const routeList = [
  { href: "/contact", labelKey: "contact" },
  { href: "/blog", labelKey: "blog" },
  { href: "/", labelKey: "home" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 pt-5 pb-5 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex items-center justify-between rtl:flex-row-reverse">
          <Logo />

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu Icon</span>
              </SheetTrigger>
              <SheetContent side="left">
                {/* Accessible header and description for screen readers */}
                <SheetHeader className="flex flex-col items-center justify-center">
                  <SheetTitle className="text-lg font-bold text-center">
                    منو
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    منوی ناوبری برنامه
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, labelKey }) => (
                    <NavigationLink
                      key={href}
                      labelKey={labelKey}
                      href={href}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <ModeToggle />
            <LanguageToggle />
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, labelKey }) => (
              <NavigationLink
                key={href}
                labelKey={labelKey}
                href={href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
          <div className="hidden md:flex gap-2 items-center">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
