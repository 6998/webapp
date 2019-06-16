import React from 'react';
import { css } from 'react-emotion';
import { PropagateLoader } from 'react-spinners';
import {CONTACT_PHONE_NUMBER} from "../lib/appConstants";
const override = css`
  display: block;
  margin: auto;
  border-color: red;
  width: 0;
  padding-top: 100px;
`;

export default class NoServer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-loader">
          <h4>
						Thank you for using <span>Agio Clients App</span> <br />
            <a href='/'>Log in </a>
          </h4>
      </div>
    );
  }
}
