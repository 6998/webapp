import React from 'react';
import {ConnectedRouter} from 'react-router-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Home from './components/pages/Home'
import About from './components/pages/About'
import FourOfFour from './components/pages/FourOfFour'
import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'
import NewExperience from './components/pages/NewExperience'
import Runs from './components/pages/Runs'
import Header from './components/Header'


class MyRouter extends React.Component {
  render() {
    const history = this.props.history;
    return (
      <ConnectedRouter history={history}>
        <Router>
          <div className="container-fluid no-padding">
            <Header/>
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/experiment" component={NewExperience}/>
              <Route path="/runs" component={Runs}/>
              {/*<Route path='*' exact={true} component={FourOfFour}/>*/}
            </div>
          </div>
        </Router>
      </ConnectedRouter>
    )
  }
};

export default MyRouter;