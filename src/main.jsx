import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "next-themes";
import DarkMode from "./component/ThemeProvider.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkMode>
      <App />
    </DarkMode>
  </StrictMode>
);
