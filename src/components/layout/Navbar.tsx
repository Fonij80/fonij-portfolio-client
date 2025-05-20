import { useState } from "react";
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
import { appRoutes } from "@/constants/routes";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const routeList = appRoutes.filter((route) => route.labelKey);
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  const navFlexDirection = dir === "rtl" ? "flex-row-reverse" : "flex-row";

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
              <SheetContent side={dir === "rtl" ? "left" : "right"}>
                {/* Accessible header and description for screen readers */}
                <SheetHeader className="flex flex-col items-center justify-center">
                  <SheetTitle className="text-lg font-bold text-center">
                    {t("navbar.title")}
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    {t("navbar.description")}
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ path, labelKey }) => (
                    <NavigationLink
                      key={path}
                      labelKey={labelKey}
                      href={path}
                      onClick={() => setIsOpen(false)}
                      disabled={labelKey === "blog" || labelKey === "tutorial"}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <LanguageToggle />
            <ModeToggle />
          </div>

          {/* Desktop */}
          <nav className={`hidden md:flex gap-2 ${navFlexDirection}`}>
            {routeList.map(({ path, labelKey }) => (
              <NavigationLink
                key={path}
                labelKey={labelKey}
                href={path}
                onClick={() => setIsOpen(false)}
                disabled={labelKey === "blog" || labelKey === "tutorial"}
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
