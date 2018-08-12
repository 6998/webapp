import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withUser from '../containers/withUser';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.menu = this.menu.bind(this);
	}

  loggedInMenu() {
		return (
			<React.Fragment>
				<Button>מאמרים</Button>
				<Button>דוחות</Button>
				<Button>צור קשר</Button>
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
  	const {isLoggedIn} = this.props;
  	console.log(this.props);
  	return isLoggedIn ? this.loggedInMenu() : this.notLoggedInMenu();
	}

  render() {
    return (
      <div className="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <img src="agio.png" className="logo" />
              </Grid>
              <Grid
                item
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                xs={6}
                className="menu"
              >
							{this.menu()}
							</Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withUser(Header);