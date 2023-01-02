import * as path from "path";

import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import manifest from "./manifest.json";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      devOptions: {
        enabled: true,
      },
      workbox: {
        globDirectory: "D:/Dev/portfolio/dev-dist",
        globPattern: "**/*.{svg,png,jpg,gif,ico}",
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
