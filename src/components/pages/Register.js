import React, { Component } from 'react';
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import RegisterForm from '../RegisterForm'

class Home extends React.Component {
  render() {
    return <div>
      <h1>Register</h1>
      <RegisterForm></RegisterForm>
    </div>;
  }
}

export default withClient(withToken(Home))