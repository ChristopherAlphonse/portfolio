import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    ...(mode !== 'test'
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
}));
