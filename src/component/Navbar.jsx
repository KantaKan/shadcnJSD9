import React from "react";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <h2 className="texl-5xl font-bold">Hello</h2>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "lightmode" : "darkmode"}</Button>
      </div>
    </div>
  );
};

export default Navbar;
