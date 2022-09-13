import React from 'react';
import RouteSwitch from "./RouteSwitch";
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/Nav.scss';
import './styles/Post.scss';
import './styles/NavItem.scss';
import './styles/SignUp.scss';
import './styles/LogIn.scss';
import './styles/Forms.scss';

require('dotenv').config()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouteSwitch/>
    </React.StrictMode>
);