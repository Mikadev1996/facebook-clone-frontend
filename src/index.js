import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/SignUp.scss';
import './styles/LogIn.scss';
import './styles/Forms.scss';
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);