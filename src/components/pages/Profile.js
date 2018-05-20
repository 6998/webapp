import React, { Component } from 'react';
import { updateAttributes } from 'react-cognito';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      accessKey: '',
      secret: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    console.log(this.props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillMount(){
    if(this.props.userAttributes)
      this.setState({ email: this.props.userAttributes.email });
      this.setState({ accessKey: this.props.userAttributes['custom:access_key'] });
      this.setState({ secret: this.props.userAttributes['custom:secret'] });
  }

  onSubmit(event){
    const user = this.props.user;
    const config = this.props.config;
    const email = this.state.email;
    event.preventDefault();

    const attr = {
      email
    };
    attr['custom:access_key'] = this.state.accessKey;
    attr['custom:secret'] = this.state.secret;
    console.log(attr);
    updateAttributes(user, attr, config).then(
      (action) => {
        this.props.dispatch(action);
        this.setState({ error: 'Profile Saved' });
      },
      error => this.setState({ error }),
    );
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changeAccessKey = (event) => {
    this.setState({ accessKey: event.target.value });
  };

  changeSecret = (event) => {
    this.setState({ secret: event.target.value });
  };

  render() {
    return <div>
      <h1>Profile {this.props.name}</h1>
      <form onSubmit={this.onSubmit}>
        <div>{this.state.error}</div>
        <label>
          Email address
          <input value={this.state.email} onChange={this.changeEmail} required />
        </label>
        <label>
          Access Key
          <input value={this.state.accessKey} onChange={this.changeAccessKey} required />
        </label>
        <label>
          Secret
          <input value={this.state.secret} onChange={this.changeSecret} required />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>;
  }
}

export default Profile