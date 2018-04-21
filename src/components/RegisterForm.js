import React from 'react';
import PropTypes from 'prop-types';
import { registerUser } from 'react-cognito';
import withCognito from '../containers/withCongnito'

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const userPool = this.props.cognito.userPool;
    const config = this.props.cognito.config;
    registerUser(userPool, config, this.state.username, this.state.password, {email: this.state.email}).then((re)=>{
      console.log(re)
    });
  };

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }


  render() {
    return <form onSubmit={this.onSubmit} className="margin-big">
      <div>{this.props.error}</div>
      <div className="col-md-4 col-md-offset-4">
        <div className="col-md-12 margin-small">
          <input placeholder="Username" onChange={this.changeUsername} required
                 className="form-control"/>
        </div>
        <div className="col-md-12 margin-small">
          <input placeholder="Email" onChange={this.changeEmail} required
                 className="form-control"/>
        </div>
        <div className="col-md-12 margin-small">
          <input placeholder="Password" onChange={this.changePassword} type="password" required
                 className="form-control"/>
        </div>
        <div className="col-md-12 margin-small">
          <button type="submit" className="btn btn-info form-control">Register</button>
        </div>
      </div>
    </form>
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};

export default withCognito(RegisterForm);
