import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import DownshiftImpl from '../../DownshiftImpl';

class ChartsForUser extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const { allCharts, chartsForUser, userId } = this.props;
    return (
      <div className="frame">
        <Grid container className="inner">
          <Grid item xs={12}>
            <DownshiftImpl
              allCharts={allCharts}
              chartsForUser={chartsForUser}
              userId={userId}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ChartsForUser;
