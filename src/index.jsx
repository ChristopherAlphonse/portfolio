import './index.css';

import React, { StrictMode, Suspense, startTransition } from 'react';

import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './Theme/ThemeContext';
import { registerSW } from 'virtual:pwa-register';

registerSW();

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
