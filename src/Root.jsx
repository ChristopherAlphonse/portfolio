import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";
import { ThemeProvider } from "@/Theme/ThemeContext";
import { createRoot } from "react-dom/client";

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
