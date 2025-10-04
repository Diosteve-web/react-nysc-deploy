import React from 'react';
import { createRoot } from 'react-dom/client';  // <-- new import
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
