import { useEffect, useState } from "react";
import { ArrowUpToLine } from "lucide-react";
import { Button } from "../../button";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return showTopBtn ? (
    <Button
      onClick={goToTop}
      className="fixed bottom-4 right-4 z-50 opacity-90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUpToLine className="h-4 w-4" />
    </Button>
  ) : null;
};
