import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import logo from './logo.svg';
import './App.css';

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet title="Travis is great" />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <div>
            <h1>Navigation</h1>
            {routes.map((route, i) => <Link key={i} to={route.path}>{route.title}</Link>)}
          </div>

          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
