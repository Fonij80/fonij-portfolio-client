import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/atoms/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/sheet";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../atoms/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../molecules/mode-toggle";
import { LanguageToggle } from "../molecules/language-toggle";
import logoImage from "../../assets/logo2.png";
import { ButtonLink } from "../atoms";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <header className="sticky border-b-[1px] top-0 pt-5 pb-5 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between rtl:flex-row-reverse">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <img src={logoImage} alt="Logo" className="h-20 w-auto" />
            </a>
          </NavigationMenuItem>

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
                    <NavLink
                      key={labelKey}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? `${buttonVariants({
                            variant: "ghost",
                          })} text-seondary-500 border-b-2 border-seondary-500`
                          : `${buttonVariants({ variant: "ghost" })}`
                      }
                    >
                      {t(`navbar.links.${labelKey}`)}
                    </NavLink>
                  ))}
                  <ButtonLink
                    href="https://github.com/Fonij80"
                    text={t("navbar.github")}
                    icon={<GitHubLogoIcon className="mr-2 w-5 h-5" />}
                  />
                  <ButtonLink
                    href="https://www.linkedin.com/in/foroozan-iraji/"
                    text={t("navbar.linkedin")}
                    icon={<LinkedInLogoIcon className="mr-2 w-5 h-5" />}
                  />
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, labelKey }: RouteProps) => (
              <NavLink
                key={labelKey}
                to={href}
                className={({ isActive }) =>
                  isActive
                    ? `text-[17px] ${buttonVariants({
                      variant: "ghost",
                    })} text-seondary-500 border-b-2 border-seondary-500`
                    : `text-[17px] ${buttonVariants({ variant: "ghost" })}`
                }
              >
                {t(`navbar.links.${labelKey}`)}
              </NavLink>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex gap-2 items-center">
            <ButtonLink
              href="https://github.com/Fonij80"
              text={t("navbar.github")}
              icon={<GitHubLogoIcon className="mr-2 w-5 h-5" />}
            />
            <ButtonLink
              href="https://www.linkedin.com/in/foroozan-iraji/"
              text={t("navbar.linkedin")}
              icon={<LinkedInLogoIcon className="mr-2 w-5 h-5" />}
            />
            <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};