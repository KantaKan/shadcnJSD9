import Navbar from "@/component/Navbar";
import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        {children}
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}

export default Layout;
