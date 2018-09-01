import React from 'react';
import withUser from '../../containers/withUser'
import ChartsDashboard from "../ChartsDashboard";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {companyName} = this.props.user;
    return <div id="homepage">
      <div className='banner'>
        <h2>
          Welcome <span>{companyName}</span>
        </h2>
      </div>
      <h3>
        Positions
      </h3>
      <ChartsDashboard />
    </div>
  }
}

export default withUser(Home)