import { Footer, ScrollToTop } from "@/components";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Layout = () => {
  const { i18n } = useTranslation();

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col antialiased",
        i18n.language === "fa" && "font-vazir dir-rtl",
      )}
      dir={i18n.dir()}
    >
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
};
