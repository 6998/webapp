import React from 'react';
import {BASE_API_URL} from "../lib/appConstants";

export default class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { companyName } = this.props;
    const { isOpen } = this.state;
    return (
      <div
        className="sub-menu"
        onClick={() => this.setState({ isOpen: !isOpen })}
      >
        <div className="sub-menu-item">{companyName}</div>
        {isOpen && (
          <div className="sub-menu-container">
            <div className="sub-menu-item logout">
              <a href={`${BASE_API_URL}auth/logout/`}>התנתק</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
