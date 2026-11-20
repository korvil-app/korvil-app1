import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root')!;

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const splash = document.getElementById('korvil-splash');
if (splash) {
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      splash.style.transition = 'opacity .4s ease';
      splash.style.opacity = '0';
      setTimeout(() => splash.remove(), 420);
    }, 700);
  });
}
