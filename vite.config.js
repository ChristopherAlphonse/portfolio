import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    VitePWA({
      manifest: {
        name: "Christopher Alphonse Developer",
        short_name: "Christopher Alphonse",
        description:
          "Christopher Alphonse is a software developer/engineer based in Boston, MA that specializes in web applications and web development. Proficient at utilizing the MERN Stack to complete Full-Stack Applications.",
        display: "standalone",
        background_color: "#000000",
        lang: "en",
        scope: "/",
        start_url: "https://christopheralphonse.com/v1/",
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
