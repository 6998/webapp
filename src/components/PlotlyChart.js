import React from 'react';
import Plot from 'react-plotly.js';
import connect from 'react-redux/es/connect/connect';
import chartsActions from '../actions/chartsActions';
import withChartById from '../containers/withChartById';
import Grid from '@material-ui/core/Grid/Grid';

class PlotlyChart extends React.Component {
  componentDidMount() {
    const { chartId } = this.props;
    this.props.dispatch(chartsActions.getSingleChart(chartId));
  }

  loading() {
    return <div className='loading'>loading</div>;
  }

  chart() {
    const { chartData } = this.props;
    let { data, layout } = chartData;
    layout.width = 1100;
    return (
      <Grid item xs={12}>
        <Plot data={data} layout={layout} style={{}} />
      </Grid>
    );
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="chart">{isLoading ? this.loading() : this.chart()}</div>
    );
  }
}

export default connect()(withChartById(PlotlyChart));
