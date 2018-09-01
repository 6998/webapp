import React, { Component } from 'react';
import MyRouter from './router';
import authActions from './actions/authActions';
import withAppLoading from './containers/withAppLoading';
import withUser from './containers/withUser';
import AppLoader from './components/AppLoader';
console.log("env", process.env)

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



  app() {
    return (
      <div className="App">
        <div className="App-intro">
          <MyRouter history={this.props.history} />
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
