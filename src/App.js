import React, { Component } from 'react';
import {
  CognitoState,
  Logout,
} from 'react-cognito';
import MyRouter from './router'
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
        <div className="App-intro">
          <MyRouter history={this.props.history}>
          </MyRouter>
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
