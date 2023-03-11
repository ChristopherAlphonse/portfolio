import { defineConfig, loadEnv } from 'vite';

import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // define: {
    //   __APP_ENV__: env.APP_ENV,
    //   process: process.env
    // },
    plugins: [
      react(),
      ...(mode !== 'production'
        ? [
            VitePWA({
              registerType: 'autoUpdate',
              includeAssets: [
                'favicon.png',
                'robots.txt',
                'apple-touch-icon.png',
                'icons/*.svg',
                'fonts/*.woff2'
              ],
              manifest: {
                theme_color: '#BD34FE',
                icons: [
                  {
                    src: '/logo192.webp',
                    sizes: '192x192',
                    type: 'image/webp',
                    purpose: 'any maskable'
                  },
                  {
                    src: '/logo512.webp',
                    sizes: '512x512',
                    type: 'image/png'
                  }
                ]
              }
            })
          ]
        : [])
    ]
  };
});
