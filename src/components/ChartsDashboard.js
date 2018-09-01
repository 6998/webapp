import React from 'react';
import withChartsForUser from '../containers/withChartsForUser';
import userAction from '../actions/userActions';
import PlotlyChart from './PlotlyChart';
import Grid from "@material-ui/core/Grid/Grid";

class ChartsDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userAction.getCharts());
  }

  charts() {
    return this.props.chartsForUser.map(id => <PlotlyChart chartId={id} />);
  }

  render() {
    const { isLoadingChartsForUser, chartsForUser } = this.props;

    if (isLoadingChartsForUser) return <div />;

    return <Grid container id="dashboard"> {this.charts()}</Grid>;
  }
}

export default withChartsForUser(ChartsDashboard);
