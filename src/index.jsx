import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./comp/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
