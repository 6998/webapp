import React from 'react';
import withUser from '../../containers/withUser';
import classnames from 'classnames';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';
import Grid from '@material-ui/core/Grid/Grid';
import User from '../admin/company/CompanyDetails';
import Link from 'react-router-dom/es/Link';
import chartsActions from "../../actions/chartsActions";
import userAction from "../../actions/userActions";
import withAllCharts from "../../containers/withAllCharts";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Add New Person',
      component: User
    };
  }

	componentDidMount() {
		this.props.dispatch(chartsActions.getAll());
		this.props.dispatch(userAction.getCharts());
	}

	plotlySubMenu() {
		return (
			<List className="menu">
				<ListSubheader disableSticky={true}>Charts</ListSubheader>
				<ListItem component={Link} to="/admin/chart/list" button>
					<ListItemIcon>
						<i className="material-icons">show_chart</i>
					</ListItemIcon>
					<ListItemText primary="Charts List" />
				</ListItem>
			</List>
		);
	}

  usersSubMenu() {
    return (
      <List className="menu">
        <ListSubheader disableSticky={true}>User Management</ListSubheader>
        <ListItem component={Link} to="/admin/company/new" button>
          <ListItemIcon>
            <i className="material-icons">person_add</i>
          </ListItemIcon>
          <ListItemText primary="New User" />
        </ListItem>
        <ListItem component={Link} to="/admin/company/list" button>
          <ListItemIcon>
            <i className="material-icons">people</i>
          </ListItemIcon>
          <ListItemText primary="Users List" />
        </ListItem>
      </List>
    );
  }

  articlesSubMenu() {
    return (
      <List className="menu">
        <ListSubheader disableSticky={true}>Blog</ListSubheader>
        <ListItem component={Link} to="/admin/post/new" button>
          <ListItemIcon>
            <i className="material-icons">add_comment</i>
          </ListItemIcon>
          <ListItemText primary="New Article" />
        </ListItem>
        <ListItem component={Link} to="/admin/post/list" button>
          <ListItemIcon>
            <i className="material-icons">comment</i>
          </ListItemIcon>
          <ListItemText primary="Articles List" />
        </ListItem>
      </List>
    );
  }

  menu() {
    return (
      <div className="frame">
        <Grid container className="inner">
          <Grid item xs={3}>
            {this.usersSubMenu()}
          </Grid>
          <Grid item xs={3}>
            {this.articlesSubMenu()}
          </Grid>
          <Grid item xs={3}>
            {this.plotlySubMenu()}
          </Grid>
        </Grid>
      </div>
    );
  }

  content() {
    const { title, component } = this.state;
    return (
      <div className="frame">
        <h4>{title}</h4>
        <div className="panel">{React.createElement(component, {}, {})}</div>
      </div>
    );
  }

  render() {
    return (
      <div id="admin">
        <div className="banner">
          <h2>Admin</h2>
        </div>
        <div className="inner">
          {this.menu()}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withUser(withAllCharts(Admin));
