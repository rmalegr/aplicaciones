import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';
// import App from './App'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //EL modo estricto ayuda a detectar errores tempranos
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
