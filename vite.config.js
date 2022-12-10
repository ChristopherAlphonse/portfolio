import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    VitePWA({
      manifest: {
        name: "vite-react-ts-100",
        short_name: "vite-react-ts-100",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/logo_files/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logo_files/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#000000",
      },
    }),
  ],
});
