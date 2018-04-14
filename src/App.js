import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Chat from './components/Chat'
import LogInForm from './components/LogInForm'
import LogoutButton from './components/LogoutButton'
import {
  CognitoState,
  Logout,
  Login,
} from 'react-cognito';
import Router from './router'
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="col-md-12">
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



          {this.props.state === "LOGGING_IN" && <div> loading! </div>}
          {
            this.props.state === "LOGGED_OUT" ?
              <Login>
                <LogInForm />
              </Login>
               :
              <Router history={this.props.history}>
              </Router>
          }
        </div>
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
  creds: state.cognito.creds
});



export default connect(mapStateToProps, null)(App);
