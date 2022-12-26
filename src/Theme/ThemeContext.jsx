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
      console.log("ran in line 31 ThemeContext");
    }
  }, []);
  useEffect(() => {
    rawSetTheme(theme);
    console.log("ran in line 36 ThemeContext");
  }, [theme]);

  useEffect(() => {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
        console.log("ran in line 46 ThemeContext");
      }
    };

    //     That setTimeout is called the moment you call addEventListener, and the return value of setTimeout (The timeout id) is passed to addEventListener.
    // You need to wrap the setTimeout in a function

    userMedia.addEventListener("load", () =>
      setTimeout(handleColorSchemeChange(), 3000)
    );
    return () => userMedia.removeEventListener(handleColorSchemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
