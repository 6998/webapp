import React, { Component } from 'react';
import { withRouter } from 'react-router';
import exampleAction from '../../actions/exampleAction'
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(exampleAction.example("test123"));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return <div>
      <h1>Dashboard {this.props.name}</h1>
      <h2>Example: {this.props.example}</h2>
    </div>;
  }
}

export default withRouter(Dashboard)