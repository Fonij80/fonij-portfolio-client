import { IconLogo } from "@/components/ui/custom";
import { ROUTES, getNavLinks } from "@/configs/routes.config";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, matchPath, useLocation } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentRoute = useMemo(() => {
    return ROUTES.find((route) =>
      matchPath({ path: route.path, end: true }, location.pathname),
    );
  }, [location.pathname]);

  const shouldShowHeader = currentRoute?.nav !== false;

  const navLinks = useMemo(() => {
    return getNavLinks(ROUTES).filter((link) => link.to !== "/work-with-me");
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return !!matchPath({ path, end: path !== "/" }, location.pathname);
  };

  if (!shouldShowHeader) {
    return null;
  }

  return (
    <header className="sticky top-4 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 md:border-b lg:px-8">
        <IconLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition ${
                isActive(link.to)
                  ? "text-white"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/work-with-me"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t("cta_button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm transition ${
                  isActive(link.to)
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/work-with-me"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t("cta_button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
