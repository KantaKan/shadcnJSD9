import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "next-themes";
import DarkMode from "./component/ThemeProvider.js";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/layout.jsx";
import LoginPage from "./Pages/login-page.jsx";
import { LoginForm } from "./component/LoginForm.jsx";
import CodingBootcampLanding from "./components/coding-bootcamp-landing.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <CodingBootcampLanding /> },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkMode>
      <RouterProvider router={router} />
    </DarkMode>
  </StrictMode>
);
