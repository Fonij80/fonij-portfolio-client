import { Button } from "../button";
import { useTheme } from "../../theme-provider";
import { Moon, Sun } from "lucide-react";

export const ModeToggle = () => {
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
};
