import React from 'react';
import {CONTACT_PHONE_NUMBER} from "../lib/appConstants";

export default class NoServer extends React.Component {
  render() {
    return (
      <div className="app-loader">
          <h4>
						We're experiencing some technical difficulties<br /><br /> Please contact us at {CONTACT_PHONE_NUMBER} <br /><br /><span>Agio Clients App</span>
          </h4>
      </div>
    );
  }
}
