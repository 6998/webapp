import React, { Component } from 'react';
import axios from 'axios'
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import withExample from '../../containers/withExample'
import exampleAction from '../../actions/exampleAction'
import {URL} from '../../lib/constants'
import JSONPretty from 'react-json-pretty';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(exampleAction.example("test123"));
    this.getRuns = this.getRuns.bind(this);
    this.renderRuns = this.renderRuns.bind(this);
    this.getRuns();
    this.state = {loading: true, data: ""};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getRuns() {
    const headers = {headers: { Authorization: this.props.token }}
    axios.get(`${URL}experiments`, headers).then((data) => {
      console.log(data.data);
      this.setState({loading: false, runs: data.data})
    })
  }

  renderRuns() {

    const all = this.state.runs.map((item, i)=>{
      return <div className="run-item" key={i}>
        <button className="btn btn-border">
          Run
        </button>
        <JSONPretty id={i}  json={item}></JSONPretty>
      </div>
    });
    return all;
  }

  render() {

    if(this.state.loading) {
      return <div>Loading</div>
    } else {
      return <div>
        {this.renderRuns()}
      </div>
    }



  }
}

export default withExample(withClient(withToken(Home)))