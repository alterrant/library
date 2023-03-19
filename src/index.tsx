import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'app';

import './app/index.css';
// import App from "./entities/calendar";

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
