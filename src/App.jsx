import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DarkMode from "./component/ThemeProvider.jsx";
import { Button } from "./components/ui/button.js";
import { useTheme } from "next-themes";
import Navbar from "./component/Navbar.jsx";
import { LoginForm } from "./component/LoginForm.jsx";
import { Toaster, toast } from "sonner";
import LoginPage from "./Pages/login-page.jsx";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="">
      <Navbar />
      <LoginPage />
      <Toaster />
    </div>
  );
}

export default App;
