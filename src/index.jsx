import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import './index.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
