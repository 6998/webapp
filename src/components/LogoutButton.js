/*
IMPORTANT:
This component was taken from https://github.com/isotoma/react-cognito-example
 */

import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = ({ onClick }) => (
    <button onClick={onClick} className="btn btn-info pull-right">Log out</button>
);
LogoutButton.propTypes = {
  onClick: PropTypes.func,
};

export default LogoutButton;