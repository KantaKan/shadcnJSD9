"use client";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center gap-8">
        <Link to="/">
          <h2 className="text-2xl font-bold">Navbar</h2>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-sm font-medium hover:text-primary">
          Home
        </Link>
        <Link to="/about" className="text-sm font-medium hover:text-primary">
          About
        </Link>
        <Link to="/services" className="text-sm font-medium hover:text-primary">
          Services
        </Link>
        <Link to="/contact" className="text-sm font-medium hover:text-primary">
          Contact
        </Link>

        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        <Avatar className="h-9 w-9">
          <AvatarImage src="https://i.pinimg.com/736x/f6/64/46/f6644688471c16d13492039c3afe1393.jpg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
