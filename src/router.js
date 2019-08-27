import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Grid from "@material-ui/core/Grid";
import withUser from "./containers/withUser";
import Company from "./components/admin/company/CompanyDetails";
import CompanyList from "./components/admin/company/CompanyList";
import EditCompany from "./components/admin/company/EditCompany";
import Header from "./components/Header";
import Login from "./components/Login";
import Redirect from "react-router-dom/es/Redirect";
import EditDashboard from "./pages/EditDashboard";

class MyRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isLogged = this.isLogged.bind(this);
    this.isNotAdmin = this.isNotAdmin.bind(this);
  }

  isLogged(nextState, replace) {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      replace({
        pathname: "/"
      });
    }
  }

  isNotAdmin() {
    const { user } = this.props;
    return !user || !user.isAdmin;
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
              className="app-body"
            >
              <Route exact path="/" component={Home} onEnter={this.isLogged} />
              <Route
                exact
                path="/edit"
                component={EditDashboard}
                onEnter={this.isLogged}
              />

              {/** Admin Routers **/}
              <Route
                exact
                path="/admin"
                render={router => {
                  if (this.isNotAdmin()) return <Redirect to="/" />;

                  return <Admin />;
                }}
              />
              <Route
                exact
                path="/admin/company/new"
                render={router => {
                  if (this.isNotAdmin()) return <Redirect to="/" />;
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
                  if (this.isNotAdmin()) return <Redirect to="/" />;

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
                  if (this.isNotAdmin()) return <Redirect to="/" />;

                  return (
                    <Admin>
                      <CompanyList />
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
