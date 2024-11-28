"use client";

import React, { useCallback, useState } from "react";
import { Theme, darkTheme, lightTheme } from "./theme";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

const themeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

const { Provider } = themeContext;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === lightTheme ? darkTheme : lightTheme
    );
  }, []);
  return (
    <Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </Provider>
  );
}

export function useTheme() {
  const context = React.useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
