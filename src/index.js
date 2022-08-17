import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/Home/Home.scss';
import './styles/Home/HomeContent.scss';
import './styles/Home/HomeContacts.scss';
import './styles/Home/HomeLeftNav.scss';
import './styles/Home/HomeLeftNav.scss';
import './styles/Nav.scss';
import './styles/Post.scss';
import './styles/NavItem.scss';
import './styles/SignUp.scss';
import './styles/LogIn.scss';
import './styles/Forms.scss';
import './styles/ProfileHeader.scss';
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);