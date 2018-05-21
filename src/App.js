import React, { Component } from 'react';
import {
  CognitoState,
  Logout,
} from 'react-cognito';
import Router from './router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {


  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.state === "LOGGED_IN") {
      // this.props.dispatch(userActions.fetchUser(nextProps.token))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-10">
              <h1 className="App-title">ML CI/CD</h1>
            </div>
          </div>
        </header>
        <div className="App-intro container">
          <Router history={this.props.history}>
          </Router>
        </div>
        <footer className="App-header footer">
          <div className="row">
          </div>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  attributes: PropTypes.object,
  state: PropTypes.string,
};

const mapStateToProps = state => ({
  state: state.cognito.state,
  user: state.cognito.user,
  attributes: state.cognito.attributes,
  creds: state.cognito.creds,
  config: state.cognito.config
});



export default connect(mapStateToProps, null)(App);
