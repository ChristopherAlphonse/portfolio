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
          "Christopher Alphonse is a full-stack developer based in Boston, MA who is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. As a new developer with a passion for technology and a strong foundation in front-end and back-end development, I am eager to use my skills and knowledge to create innovative solutions for businesses and organizations. My expertise includes the MERN stack, TypeScript, Tailwind CSS, GraphQL, and MySQL. Check out my portfolio to learn more about my work and skills.",
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
