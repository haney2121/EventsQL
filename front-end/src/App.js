import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import AuthContext from './context/auth-context';

import AuthRoute from './components/Auth';
import EventsRoute from './components/Events';
import BookingsRoute from './components/Bookings';

import MainNavBar from './container/Nav/MainNavBar';

class App extends Component {
  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token, userId });
  }

  logout = () => {
    this.setState({ token: null, userId: null });
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <AuthContext.Provider value={{ token: this.state.token, userId: this.state.userId, login: this.login, logout: this.logout }}>
            <MainNavBar />
            <main className="mainContent">
              <Switch>
                <Redirect from="/" to="/auth" exact />
                <Route path="/auth" component={AuthRoute} />
                <Route path="/events" component={EventsRoute} />
                <Route path="/bookings" component={BookingsRoute} />
              </Switch>
            </main>
          </AuthContext.Provider>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
