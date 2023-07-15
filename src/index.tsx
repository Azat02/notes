import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './theme';
import ResetCSS from './theme/ResetCSS';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <ResetCSS />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

