import * as path from 'path';

import { VitePWA } from 'vite-plugin-pwa';
import compress from 'vite-plugin-compress';
import { defineConfig } from 'vite';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import manifest from './manifest.json';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
    VitePWA({
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
      build: {
        sourcemap: true,
      },
    }),

    compress(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-bootstrap',
            'react-transition-group',
            'framer-motion',
          ],
        },
      },
      plugins: [
        terser({
          format: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        }),
      ],
    },
  },
});
