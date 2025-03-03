import { Button } from "@/components/atoms/button";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-[1.1rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.1rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
