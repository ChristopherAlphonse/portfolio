import "./index.css";

import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./Theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HelmetProvider>,
);
