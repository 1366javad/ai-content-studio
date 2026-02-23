"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}
export { ThemeContextProvider, useThemeContext };
