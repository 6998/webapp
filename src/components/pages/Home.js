import React from 'react';
import withUser from '../../containers/withUser';
import ChartsDashboard from '../ChartsDashboard';

class Home extends React.Component {
  render() {
    return (
      <div id="homepage">
        <h2 className='positions'>
        </h2>
        <ChartsDashboard />
      </div>
    );
  }
}

export default withUser(Home);
