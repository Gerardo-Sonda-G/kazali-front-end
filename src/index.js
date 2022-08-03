import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import App from './App';
//import Endpoint2 from './Endpoint2';
import Home from './Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
  </React.StrictMode>
);
