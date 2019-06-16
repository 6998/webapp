import React, { Component } from 'react';
import MyRouter from './router';
import authActions from './actions/authActions';
import withAppLoading from './containers/withAppLoading';
import withUser from './containers/withUser';
import AppLoader from './components/AppLoader';
import NoServer from './components/NoServer';
import Grid from '@material-ui/core/Grid/Grid';
console.log('env', process.env);

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
        <footer className="footer">
          <Grid container>
            <Grid item md={3} sm={false} />
            <Grid item md={2} sm={false} />
            <Grid item md={4} xs={12}>
              <h1>צור קשר</h1>
              <div className="address">
                <div className="line">
                  המפלסים 17, קריית אריה
                  <br />
                  פתח תקווה 4951447
                </div>
                <div className="line">
                  <a href="phone:03-5559400"> 03-5559400 </a>
                </div>
                <div className="line">
                  <a href="office@agio.co.il">office@agio.co.il</a>
                </div>
              </div>
            </Grid>
            <Grid item md={3} xs={12} className="title-section">
              <h1>אג׳יו</h1>
              <h2>ניהול סיכונים והחלטות פיננסיות בע"מ</h2>
              <span className="rights">כל הזכויות שמורות 2018</span>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }

  noServerContent() {
    return <NoServer />;
  }

  render() {
    const { isAppLoading, noServer } = this.props;
    if (noServer) return this.noServerContent();

    return isAppLoading ? this.loader() : this.app();
  }
}

App.propTypes = {};

export default withAppLoading(withUser(App));
