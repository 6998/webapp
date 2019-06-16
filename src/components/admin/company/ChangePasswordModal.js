import React from 'react';
import Modal from '@material-ui/core/Modal/Modal';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';

export default class ChangePasswordModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    const { password } = this.state;
    this.props.onClose(password);
  }

  handleChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }
  render() {
    const { isOpen } = this.props;
    const { password } = this.state;
    const { close } = this;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
      >
        <div className="modal">
          <h3>change password</h3>
          <TextField
            id="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            margin="normal"
            className="text-field"
          />
          <Button onClick={close}> Save </Button>
        </div>
      </Modal>
    );
  }
}
