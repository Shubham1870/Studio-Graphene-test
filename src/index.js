import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/main/main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(

    <Router>
      <App />
    </Router>

);

reportWebVitals();
