"use client";

import { ThemeProvider, useTheme } from "next-themes";

export default function DarkMode({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
