import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import AuthRoute from './components/Auth';
import EventsRoute from './components/Events';
import BookingsRoute from './components/Bookings';

import MainNavBar from './container/Nav/MainNavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainNavBar />
          <main className="mainContent">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={AuthRoute} />
              <Route path="/events" component={EventsRoute} />
              <Route path="/bookings" component={BookingsRoute} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
