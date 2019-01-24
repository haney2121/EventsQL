import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavBar.css';

const MainNavBar = (props) => (
  <header className="mainNav">
    <div className="mainNavLogo">
      <h1>EasyEvent</h1>
    </div>
    <nav className="mainNavItems">
      <ul>
        <li><NavLink to="/bookings">Bookings</NavLink></li>
        <li><NavLink to="/auth">Authenicate</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default MainNavBar;