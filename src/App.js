import React, { Component } from 'react';
import MyRouter from './router';
import authActions from './actions/authActions';
import withAppLoading from './containers/withAppLoading';
import withUser from './containers/withUser';
import AppLoader from './components/AppLoader';
import Login from './components/Login';
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
class App extends Component {
  constructor(props) {
    super(props);
    this.app = this.app.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(authActions.auth());
  }

  loader() {
    return <AppLoader />;
  }

  logIn() {
    return <Login />;
  }

  app() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <div className="App-intro">
					<Header />

					{isLoggedIn ? (
            <MyRouter history={this.props.history} />
          ) : (
            this.logIn()
          )}
        </div>
        <footer className="App-header footer">
          <div className="row" />
        </footer>
      </div>
    );
  }

  render() {
    const { isAppLoading } = this.props;
    return isAppLoading ? this.loader() : this.app();
  }
}

App.propTypes = {};

export default withAppLoading(withUser(App));
