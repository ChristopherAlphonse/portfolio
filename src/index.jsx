import "./index.css";

import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { ThemeProvider } from "./Theme/ThemeContext";

const TrackingId = import.meta.env.VITE_TRACKING_ID;
ReactGA.initialize(TrackingId);
import { registerSW } from 'virtual:pwa-register';

registerSW();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
