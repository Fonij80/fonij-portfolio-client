import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { buttonVariants } from "../../atoms/button";
import { Menu } from "lucide-react";
import { NavigationLink, Logo } from "@/components/ui/extra";
import { ModeToggle, LanguageToggle } from "@/components/ui/extra";
// import { Logo } from "../../atoms";

interface RouteProps {
  href: string;
  labelKey: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    labelKey: "home",
  },
  {
    href: "/blog",
    labelKey: "blog",
  },
  {
    href: "/contact",
    labelKey: "contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 pt-5 pb-5 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between rtl:flex-row-reverse">
          <Logo />

          {/* mobile */}
          <span className="flex md:hidden">
            <LanguageToggle />
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  {/* TODO Add a Header for mobile drawer */}
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, labelKey }: RouteProps) => (
                    <NavigationLink
                      labelKey={labelKey}
                      href={href}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, labelKey }: RouteProps) => (
              <NavigationLink
                labelKey={labelKey}
                href={href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
