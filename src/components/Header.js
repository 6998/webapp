import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withUser from '../containers/withUser';
import Notifications from './Notifications';
import withRouter from 'react-router/es/withRouter';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menu = this.menu.bind(this);
    this.linkToHomepage = this.linkToHomepage.bind(this);
    this.linkToArticles = this.linkToArticles.bind(this);
    this.loggedInMenu = this.loggedInMenu.bind(this);
  }

  loggedInMenu() {
    const { path } = this.props;
    const isReports = path === '/';
    const isArticles = path === '/articles';
    const isContact = path === '/contact';
    return (
      <React.Fragment>
        <Button onClick={this.linkToHomepage} className={isReports ? 'current' : null}>דוחות</Button>
        <Button onClick={this.linkToArticles} className={isArticles ? 'current' : null}>מאמרים</Button>
        <Button onClick={this.likToContact} className={isContact ? 'current' : null}>צור קשר</Button>
      </React.Fragment>
    );
  }
  notLoggedInMenu() {
    return (
      <React.Fragment>
        <Button>צור קשר</Button>
      </React.Fragment>
    );
  }

  menu() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? this.loggedInMenu() : this.notLoggedInMenu();
  }

  linkToHomepage() {
    this.props.history.push('/');
  }

  linkToArticles() {
    this.props.history.push('/articles');
  }

	likToContact() {
    this.props.history.push('/contact');
  }

  render() {
    return (
      <div className="header">
        <Notifications />
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={6}>
                <img
                  src="/agio.png"
                  className="logo"
                  onClick={this.linkToHomepage}
                />
              </Grid>
              <Grid
                item
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                xs={6}
              >
                <div className="menu">{this.menu()}</div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withUser(Header));
