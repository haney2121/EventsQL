import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';

import './MainNavBar.css';

const MainNavBar = (props) => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <header className="mainNav">
          <div className="mainNavLogo">
            <h1>EasyEvent</h1>
          </div>
          <nav className="mainNavItems">
            <ul>
              {!context.token &&
                <li><NavLink to="/auth">Authenicate</NavLink></li>
              }
              <li><NavLink to="/events">Events</NavLink></li>
              {
                <li><NavLink to="/bookings">Bookings</NavLink></li>
              }
            </ul>
          </nav>
        </header>
      )
    }}
  </AuthContext.Consumer>
)

export default MainNavBar;