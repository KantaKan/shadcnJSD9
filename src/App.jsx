import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DarkMode from "./component/ThemeProvider.jsx";
import { Button } from "./components/ui/button.js";
import { useTheme } from "next-themes";
import Navbar from "./component/Navbar.jsx";
import { LoginForm } from "./component/LoginForm.jsx";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Navbar />
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
