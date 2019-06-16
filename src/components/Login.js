import React from 'react';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import authActions from '../actions/authActions';
import withUser from '../containers/withUser';
import connect from 'react-redux/es/connect/connect';

class Login extends React.PureComponent {
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
    this.setState({[name]: value})
  }

  submitForm() {
    const { password, username } = this.state;
    this.props.dispatch(authActions.login({ password, username }));
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
    const { loginFailed } = this.props.auth;
    if (loginFailed) {
      return <div className="error msg">Invalid email or password</div>;
    }

    return <div className="error" />;
  }

  render() {
    const emailPlaceholder = this.placeholder('username', 'Company');
    const passPlaceholder = this.placeholder('password', 'Password');
    return (
      <Grid container>
        <Grid item xs={12}>
					<img
						src="/agio.png"
						className="logo"
						alt="Agiofx"
					/>
        </Grid>
        <Grid item md={4} xs={true} />
        <Grid item md={4} xs={12}>
          <form className="login">
            {this.errorMessage()}
            <input
              name="username"
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
