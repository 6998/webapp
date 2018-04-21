import React, { Component } from 'react';
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import LogInForm from '../LogInForm'
import {
  CognitoState,
  Logout,
  Login,
} from 'react-cognito';

class Home extends React.Component {
  render() {
    return <div>
      <h1>Login</h1>
      <Login>
        <LogInForm />
      </Login>
      </div>;
  }
}

export default withClient(withToken(Home))