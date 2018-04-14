import React, { Component } from 'react';
import axios from 'axios'
import withToken from '../../containers/withToken'
class Home extends React.Component {
  render() {
    const headers = {headers: { Authorization: this.props.token }}
    axios.get('http://localhost:8080', headers).then(() => {})
    return <h1>home {this.props.name}</h1>;
  }
}

export default withToken(Home)
