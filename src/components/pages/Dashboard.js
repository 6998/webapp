import React, { Component } from 'react';
import { withRouter } from 'react-router';
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import withExample from '../../containers/withExample'
import exampleAction from '../../actions/exampleAction'
import withCognito from '../../containers/withCongnito'
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(exampleAction.example("test123"));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    if(this.props.state !== "LOGGED_IN") {
      this.props.history.push("/login")
    }
    // const headers = {headers: { Authorization: this.props.token }}
    // axios.get('http://localhost:8080/example', headers).then(() => {})
    return <div>
      <h1>Dashboard {this.props.name}</h1>
      <h2>Example: {this.props.example}</h2>
    </div>;
  }
}

export default withRouter(withCognito(withExample(withClient(withToken(Dashboard)))))