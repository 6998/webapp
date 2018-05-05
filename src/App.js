import React, { Component } from 'react';
import logo from './logo.svg';
import LogoutButton from './components/LogoutButton'
import {
  CognitoState,
  Logout,
} from 'react-cognito';
import Router from './router'
import Loading from './components/Loading'
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withCognito from './containers/withCongnito'
import userActions from './actions/userActions'

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
              {/*TODO*/}
            </div>
            <div className="col-md-10">
              <h1 className="App-title">SIMPLE CHAT</h1>
            </div>
            <div className="col-md-1">
              {this.props.state === "LOGGED_IN" &&
              <Logout>
                <LogoutButton />
              </Logout>
              }
            </div>
          </div>
        </header>
        <div className="App-intro container">
          {this.props.state === "LOGGING_IN" ? <Loading/> :
            <Router history={this.props.history}>
            </Router>
          }
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



export default withCognito(connect(mapStateToProps, null)(App));
