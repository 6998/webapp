import React from 'react';
import withChartsForUser from '../containers/withChartsForUser';
import userAction from '../actions/userActions';
import PlotlyChart from './PlotlyChart';
import Grid from '@material-ui/core/Grid/Grid';

class ChartsDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(userAction.getCharts());
		if(window.screen && window.screen.orientation)
			window.screen.orientation.lock('landscape');
  }

  charts() {
    return this.props.chartsForUser.map(id => <PlotlyChart key={id} chartId={id} className='chart' />);
  }

  render() {
    const { isLoadingChartsForUser } = this.props;

    if (isLoadingChartsForUser) return <div />;

    return (
      <Grid container id="dashboard">
        {this.charts()}
      </Grid>
    );
  }
}

ChartsDashboard.defaultProps = {
  chartsForUser: []
};

export default withChartsForUser(ChartsDashboard);
