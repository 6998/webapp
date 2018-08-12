import React from 'react';
import {ConnectedRouter} from 'react-router-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Grid from '@material-ui/core/Grid';

class MyRouter extends React.Component {
  render() {
    const history = this.props.history;
    return (
      <ConnectedRouter history={history}>
        <Router>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
              <Route exact path="/" component={Home}/>
            </Grid>
        </Router>
      </ConnectedRouter>
    )
  }
};

export default MyRouter;