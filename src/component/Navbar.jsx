import React from "react";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Avatar } from "../components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between p-4">
      <div className="flex justify-between gap-8">
        <h2 className="texl-5xl font-bold">Navbar</h2>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "lightmode" : "darkmode"}</Button>
      </div>
      <div className="">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://i.pinimg.com/736x/f6/64/46/f6644688471c16d13492039c3afe1393.jpg" />
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
