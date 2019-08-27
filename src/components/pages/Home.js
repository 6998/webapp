import React from 'react';
import withUser from '../../containers/withUser';

class Home extends React.Component {
  render() {
    return (
      <div id="homepage">
        <h2 className='positions'>

        </h2>
      </div>
    );
  }
}

export default withUser(Home);
