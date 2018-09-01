import React from 'react';
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import withNotifications from "../containers/withNotifications";
import {closeNotifications} from "../actions/notifications";

class Notifications extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    const text = props.notifications.text;
    const isOpen = props.notifications.isOpen;
    return { text, isOpen };
  }

  constructor(props) {
    super();
    this.state = {};
    this.handleClose = this.handleClose.bind(this)
  }

	handleClose() {

    this.props.dispatch(closeNotifications())
  }

  render() {
    const { text, isOpen } = this.state;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{text}</span>}
      />
    );
  }
}

export default withNotifications(Notifications)