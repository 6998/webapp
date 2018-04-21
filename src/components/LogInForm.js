/*
IMPORTANT:
This component was taken from https://github.com/isotoma/react-cognito-example
 */
import React from 'react';
import PropTypes from 'prop-types';
import withCognito from '../containers/withCongnito'
import { withRouter } from 'react-router';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  componentWillUnmount = () => {
    this.props.clearCache();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps.state, nextProps.state === "LOGGED_IN")

  }

  render() {
    if(this.props.state === "LOGGED_IN") {
      this.props.history.push("/dashboard");
      return <div></div>
    }

    return <form onSubmit={this.onSubmit} className="margin-big">
      <div>{this.props.error}</div>
      <div>{this.state.email}</div>
      {this.props.state === "LOGGING_IN" && <div> loading! </div>}
      <div className="col-md-4 col-md-offset-4">
        <div className="col-md-12 margin-small">
          <input placeholder="Username" value={this.state.username} onChange={this.changeUsername} required
                 className="form-control"/>
        </div>
        <div className="col-md-12 margin-small">
          <input placeholder="Password" onChange={this.changePassword} type="password" required
                 className="form-control"/>
        </div>
        <div className="col-md-12 margin-small">
          <button type="submit" className="btn btn-info form-control">Sign in</button>
        </div>
      </div>
    </form>
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};

export default withRouter(withCognito(LoginForm));
