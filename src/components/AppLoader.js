import React from 'react';
import { css } from 'react-emotion';
import { PropagateLoader } from 'react-spinners';
const override = css`
  display: block;
  margin: auto;
  border-color: red;
  width: 0;
  padding-top: 100px;
`;

export default class AppLoader extends React.Component {
  render() {
    return (
      <div className="app-loader">
        <PropagateLoader sizeUnit={'px'} size={15} className={override} />
        <div>
          <h4>
            Loading <span>Agio</span> Clients App
          </h4>
        </div>
      </div>
    );
  }
}
