import React, { Component } from 'react';
import axios from 'axios'
import withToken from '../../containers/withToken'
import withClient from '../../containers/withClient'
import withExample from '../../containers/withExample'
import exampleAction from '../../actions/exampleAction'
import {URL} from '../../lib/constants'

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
    let rows = [<div className="run row" key={-1}>
      <div className="col-md-3">
        <b>ID</b>
      </div>
      <div className="col-md-3">
        <b>Options</b>
      </div>
      <div className="col-md-3">
        <b>S3</b>
      </div>
      <div className="col-md-3">
        <b>Run</b>
      </div>
    </div>]
    const all = this.state.runs.map((item, i)=>{
      return <div className="run row" key={i}>
        <div className="col-md-3">
          {item.id}
        </div>
        <div className="col-md-3">
          <p>{JSON.stringify(item.options)}</p>
        </div>
        <div className="col-md-3">
          <p>{JSON.stringify(item.s3)}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-border">Run</button>
        </div>
      </div>
    });
    rows = rows.concat(all)
    console.log(rows)
    return rows;
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