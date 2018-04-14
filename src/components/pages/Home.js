import React, { Component } from 'react';
import axios from 'axios'
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import awsConfig from '../../aws.config.json'

class Home extends React.Component {
  render() {
    const headers = {headers: { Authorization: this.props.token }}
    axios.get('http://localhost:8080/example', headers).then(() => {})
    return <div>
      <h1>home {this.props.name}</h1>

    </div>;
  }
}

export default withClient(withToken(Home))