import { ThemeProvider } from "@/Theme/ThemeContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = createRoot(container);

const render = (App) => {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  );
};

export default render;
