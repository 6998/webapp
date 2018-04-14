import React from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages'
import Textbox from './Textbox'
const Chat = ({ onClick }) => (
  <div className="col-md-12">
    <Messages/>
    <Textbox/>
  </div>
);
Chat.propTypes = {
};

export default Chat;