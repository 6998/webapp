import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withUser from '../containers/withUser';
import Notifications from './Notifications';
import withRouter from 'react-router/es/withRouter';
import SubMenu from './SubMenu';
import {BASE_API_URL} from "../lib/appConstants";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menu = this.menu.bind(this);
    this.linkToHomepage = this.linkToHomepage.bind(this);
    this.loggedInMenu = this.loggedInMenu.bind(this);
    this.likToRate = this.likToRate.bind(this);
    this.likToLogout = this.likToLogout.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = { width: window.innerWidth, mobileMenu: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log('window.innerWidth', window.innerWidth);
    this.setState({ width: window.innerWidth });
  }

  loggedInMenu() {
    const { path } = this.props;
    const isReports = path === '/';
    const isContact = path === '/contact';
    return (
      <React.Fragment>
        <Button
          onClick={this.linkToHomepage}
          className={isReports ? 'current' : null}
        >
          דוחות
        </Button>
        <Button
          onClick={this.likToRate}
          className={isContact ? 'current' : null}
        >
          שערים
        </Button>
        {/*<Button*/}
          {/*onClick={this.likToContact}*/}
          {/*className={isContact ? 'current' : null}*/}
        {/*>*/}
          {/*צור קשר*/}
        {/*</Button>*/}
        {this.isMobile() && <Button
					onClick={this.likToLogout}
				>
					התנתק
				</Button>}
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
    this.setState({ mobileMenu: false });
    this.props.history.push('/');
  }


  likToContact() {
    this.setState({ mobileMenu: false });
    this.props.history.push('/contact');
  }

  likToRate() {
    this.setState({ mobileMenu: false });
    this.props.history.push('/fx');
  }

	likToLogout() {
		window.location.href = `${BASE_API_URL}auth/logout/`;
	}

  isMobile() {
    return this.state.width < 431;
  }

  mobileMenuButton() {
    return (
      <i
        className="material-icons mobile-menu-icon"
        onClick={() => this.setState({ mobileMenu: !this.state.mobileMenu })}
      >
        menu
      </i>
    );
  }

  render() {
    const { companyName } = this.props.user;
    const { mobileMenu } = this.state;
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
              <div className="top-row">
                <img
                  src="/agio.png"
                  className="logo"
                  onClick={this.linkToHomepage}
                  alt=""
                />
                {this.isMobile() ? (
                  this.mobileMenuButton()
                ) : (
                  <SubMenu companyName={companyName} />
                )}
              </div>
              <Grid
                item
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                xs={12}
              >
                <div className="menu">
                  {(!this.isMobile() || mobileMenu) && this.menu()}
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withUser(Header));
