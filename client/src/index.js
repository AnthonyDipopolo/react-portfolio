import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Create a root for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within StrictMode for development checks
root.render(
  <React.StrictMode>
    {/* Render the App component */}
    <App />
  </React.StrictMode>
);
