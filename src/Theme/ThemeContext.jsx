import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
  };
  useEffect(() => {
    if (initialTheme) {
      rawSetTheme(initialTheme);
    }
  }, []);
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  useEffect(() => {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (event) => {
      if (event.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    userMedia.addListener(handleColorSchemeChange);
    return () => userMedia.removeListener(handleColorSchemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
