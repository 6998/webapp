import React from 'react';
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router'


import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import FourOfFour from './components/pages/FourOfFour'
import Dashboard from './components/pages/Dashboard'

class Router extends React.Component {
  render() {
    const history = this.props.history;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path='*' exact={true} component={FourOfFour} />
        </Switch>
      </ConnectedRouter>
    )
  }
};

export default Router;