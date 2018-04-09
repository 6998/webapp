import React from 'react';
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'


import Home from './components/pages/Home'
import About from './components/pages/About'

class Router extends React.Component {
  render() {
    const history = this.props.history;
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </ConnectedRouter>
    )
  }
};

export default Router;