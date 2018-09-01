import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Grid from '@material-ui/core/Grid';
import withUser from './containers/withUser';
import Company from './components/admin/company/CompanyDetails';
import CompanyList from './components/admin/company/CompanyList';
import EditCompany from './components/admin/company/EditCompany';
import ChartsList from './components/admin/chart/ChartsList';
import Header from './components/Header';
import ArticlesPage from './components/pages/ArticlesPage';
import Login from "./components/Login";

class MyRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isLogged = this.isLogged.bind(this);
  }

  isLogged(nextState, replace) {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      replace({
        pathname: '/'
      });
    }
  }

  isAdmin(nextState, replace) {
    const { isLoggedIn } = this.props;
    const { isAdmin } = this.props.user;
    if (!isLoggedIn || !isAdmin) {
      replace({
        pathname: '/'
      });
    }
  }

	login() {
		return <Login />;
	}

  render() {
    const { history, isLoggedIn } = this.props;
    if (!isLoggedIn) return this.login();
    return (
      <ConnectedRouter history={history}>
        <Router>
          <div>
            <Header path={history.location.pathname} />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Route exact path="/" component={Home} onEnter={this.isLogged} />
              <Route
                exact
                path="/admin"
                render={router => {
                  return <Admin />;
                }}
                onEnter={this.isAdmin}
              />
              <Route
                exact
                path="/articles"
                render={router => {
                  return <ArticlesPage />;
                }}
                onEnter={this.isAdmin}
              />
              <Route
                exact
                path="/admin/company/new"
                render={router => {
                  return (
                    <Admin>
                      <Company />
                    </Admin>
                  );
                }}
                onEnter={this.isAdmin}
              />
              <Route
                exact
                path="/admin/company/edit/:id"
                render={router => {
                  const id = router.match.params.id;
                  return (
                    <Admin>
                      <EditCompany id={id} />
                    </Admin>
                  );
                }}
                onEnter={this.isAdmin}
              />
              <Route
                exact
                path="/admin/company/list"
                render={router => {
                  return (
                    <Admin>
                      <CompanyList />
                    </Admin>
                  );
                }}
                onEnter={this.isAdmin}
              />
              <Route
                exact
                path="/admin/chart/list"
                render={router => {
                  return (
                    <Admin>
                      <ChartsList />
                    </Admin>
                  );
                }}
                onEnter={this.isAdmin}
              />
            </Grid>
          </div>
        </Router>
      </ConnectedRouter>
    );
  }
}

export default withUser(MyRouter);
