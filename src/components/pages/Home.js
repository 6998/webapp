import React, { Component } from 'react';
import axios from 'axios'

class Home extends React.Component {
  render() {
    axios.get('https://google.com').then(() => {})
    return <h1>home, {this.props.name}</h1>;
  }
}

export default Home
