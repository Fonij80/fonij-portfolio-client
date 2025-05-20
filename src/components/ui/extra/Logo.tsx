import logoImage from "@/assets/images/fonij_logo.png";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logoImage} alt="Logo" className="h-50" />
    </NavLink>
  );
};
