import React, {Component} from 'react';
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return <header className="header">
      <div className="col">
        <h1 className="App-title">ML CI/CD</h1>
      </div>
      <div className="row justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects"> Projects </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Runs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Settings</a>
          </li>
        </ul>
      </div>
    </header>;
  }
}

export default withRouter(Header)