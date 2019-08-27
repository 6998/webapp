import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Grid from '@material-ui/core/Grid/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import IconButton from '@material-ui/core/IconButton/IconButton';
import userAction from '../../../actions/userActions';
import withNewCompany from '../../../containers/withNewCompany';
import connect from 'react-redux/es/connect/connect';
import ChangePasswordModal from './ChangePasswordModal';
import authActions from "../../../actions/authActions";
const emptyCompany = {
	username: '',
		companyName: '',
		email: '',
		agioId: ''
};

class CompanyDetails extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    const newState = state;
    if (props.singleCompany && props.singleCompany._id && !state.company._id) {
      newState.company = props.singleCompany;
      newState.company.password = null;
      newState.isSaved = true;
    } else {
			newState.company = emptyCompany;
			newState.isSaved = null;
		}
    return { ...newState };
  }

  constructor(props) {
    super(props);
    this.state = {
      isDeleteOpen: false,
      company: emptyCompany,
      isChangePasswordModalOpen: false
    };
    this.deleteButton = this.deleteButton.bind(this);
    this.sideMenu = this.sideMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangePasswordModalClose = this.handleChangePasswordModalClose.bind(
      this
    );
    this.handleChangePasswordModalOpen = this.handleChangePasswordModalOpen.bind(
      this
    );
  }

	componentWillUnmount() {
    this.props.dispatch(userAction.cleanCompany());
  }

  handleDelete() {
    const { isDeleteOpen, company } = this.state;
    const { _id: id } = company;
    if (isDeleteOpen) {
      this.props.dispatch(userAction.deleteCompany(id));
    }
    this.setState({ ...this.state, isDeleteOpen: !isDeleteOpen });
  }

  changePasswordButton() {
    const { isSaved } = this.state;
    if (!isSaved) return <div />;

    return (
      <ListItem button onClick={this.handleChangePasswordModalOpen}>
        <ListItemIcon>
          <i className="material-icons">vpn_key</i>
        </ListItemIcon>
        <ListItemText component="button" primary="Update Password" />
      </ListItem>
    );
  }

  deleteButton() {
    const { isDeleteOpen, isSaved } = this.state;
    const text = isDeleteOpen ? 'Are you sure ?' : 'Delete';
    if (!isSaved) return;

    return (
      <ListItem button onClick={this.handleDelete}>
        {!isDeleteOpen && (
          <ListItemIcon>
            <i className="material-icons">delete</i>
          </ListItemIcon>
        )}
        {isDeleteOpen && (
          <ListItemIcon>
            <IconButton aria-label="Comments">
              <i className="material-icons red">delete</i>
            </IconButton>
          </ListItemIcon>
        )}
        <ListItemText component="button" primary={text} />
      </ListItem>
    );
  }

  sideMenu() {
    const { isSaved } = this.state;
    const saveText = isSaved ? 'Update' : 'Save';
    return (
      <List component="nav">
        <ListItem button onClick={this.handleSave}>
          <ListItemIcon>
            <i className="material-icons">check</i>
          </ListItemIcon>
          <ListItemText primary={saveText} />
        </ListItem>
        {this.deleteButton()}
        {this.changePasswordButton()}
      </List>
    );
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const company = { ...this.state.company };
    company[name] = value;
    this.setState({ company });
  }

  handleSave() {
    const { isSaved, company } = this.state;
    if (!isSaved) {
      this.props.dispatch(userAction.newCompany(company));
    } else {
      this.props.dispatch(userAction.updateCompany(company));
    }
  }

  form() {
    const { isSaved, company } = this.state;
    return (
      <form noValidate autoComplete="off" className="form">
        <TextField
          id="companyName"
          name="companyName"
          label="Company Name"
          value={company.companyName}
          onChange={this.handleChange}
          margin="normal"
          className="text-field"
        />
        <TextField
          id="username"
          name="username"
          label="Username"
          value={company.username}
          onChange={this.handleChange}
          margin="normal"
          className="text-field"
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={company.email}
          onChange={this.handleChange}
          margin="normal"
          className="text-field"
        />
        <TextField
          id="agioId"
          name="agioId"
          label="Agio Id"
          value={company.agioId}
          onChange={this.handleChange}
          margin="normal"
          className="text-field"
        />
        {!isSaved && (
          <TextField
            id="password"
            name="password"
            label="password"
            type="password"
            value={company.password}
            onChange={this.handleChange}
            margin="normal"
            className="text-field"
          />
        )}
      </form>
    );
  }

  handleChangePasswordModalClose(password) {
    const {_id: id} = this.state.company;
    this.props.dispatch(authActions.changePassword(password, id));
    this.setState({ isChangePasswordModalOpen: false });
  }

  handleChangePasswordModalOpen() {
    this.setState({ isChangePasswordModalOpen: true });
  }

  render() {
    const { isChangePasswordModalOpen } = this.state;
    const { handleChangePasswordModalClose } = this;
    return (
      <div className="frame">
        <Grid container className="inner no-padding">
          <Grid item xs={3} className="side-menu">
            {this.sideMenu()}
          </Grid>
          <Grid item xs={9}>
            {this.form()}
          </Grid>
        </Grid>
        <ChangePasswordModal
          isOpen={isChangePasswordModalOpen}
          onClose={handleChangePasswordModalClose}
        />
      </div>
    );
  }
}

export default connect()(withNewCompany(CompanyDetails));
