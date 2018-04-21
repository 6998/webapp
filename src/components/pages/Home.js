import React, { Component } from 'react';
import axios from 'axios'
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import withExample from '../../containers/withExample'
import exampleAction from '../../actions/exampleAction'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(exampleAction.example("test123"));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    // const headers = {headers: { Authorization: this.props.token }}
    // axios.get('http://localhost:8080/example', headers).then(() => {})
    return <div>
      <h1>home {this.props.name}</h1>
      <h2>Example: {this.props.example}</h2>

    </div>;
  }
}

export default withExample(withClient(withToken(Home)))