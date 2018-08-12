import React from 'react';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import authActions from '../actions/authActions';
import withUser from '../containers/withUser';
import connect from 'react-redux/es/connect/connect';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'isFocused-email': false,
      'isFocused-password': false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.placeholder = this.placeholder.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.state[name] = value;
  }

  submitForm() {
    const { password, email } = this.state;
    this.props.dispatch(authActions.login({ password, email }));
  }

  onBlur(event) {
    const name = event.target.name;
    this.setState({ [`isFocused-${name}`]: false });
  }

  onFocus(event) {
    const name = event.target.name;
    this.setState({ [`isFocused-${name}`]: true });
  }

  placeholder(name, text) {
    const isFocus = this.state[`isFocused-${name}`];
    if (isFocus) return '';
    return text;
  }

  errorMessage() {
    const { loginFailed } = this.props;
    if (loginFailed) {
      return <div className="error">Invalid email or password</div>
    }
  }

  render() {
    const emailPlaceholder = this.placeholder('email', 'Email');
    const passPlaceholder = this.placeholder('password', 'Password');
    return (
      <Grid container>
        <Grid item md={4} xs={true} />
        <Grid item md={4} xs={12}>
          <form className="login">
            {this.errorMessage()}
            <input
              name="email"
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              onChange={this.handleChange}
              placeholder={emailPlaceholder}
            />
            <input
              type="password"
              name="password"
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              onChange={this.handleChange}
              placeholder={passPlaceholder}
            />
            <Button onClick={this.submitForm}>Login</Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default connect()(withUser(Login));
