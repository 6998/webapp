import React from 'react';
import Plot from 'react-plotly.js';
import connect from 'react-redux/es/connect/connect';
import chartsActions from '../actions/chartsActions';
import withChartById from '../containers/withChartById';
import Grid from '@material-ui/core/Grid/Grid';

class PlotlyChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    const { chartId } = this.props;
    this.props.dispatch(chartsActions.getSingleChart(chartId));
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  isMobile() {
    return this.state.width < 431;
  }

  isError() {
    const { chartData } = this.props;
    if (chartData && chartData.error) return true;
    return false;
  }

  loading() {
    return (
      <div className="chart">
        <div className="loading">loading</div>
      </div>
    );
  }

  chart() {
    const { chartData } = this.props;
    const config = {
      showLink: false,
      displaylogo: false,
      modeBarButtonsToRemove: ['sendDataToCloud']
    };
    const { data, layout } = chartData;

    if (typeof layout.title === 'object') layout.title = layout.title.text;

    layout.margin = { t: 40, b: 0, l: 30, r: 10 };
    console.log(layout);

    if (this.isMobile())
      layout.titlefont = {
        size: 12
      };

    return (
      <React.Fragment>
        <Grid item lg={12} xs={12}>
          <Plot
            data={data}
            layout={layout}
            style={{ marginTop: '20px' }}
            config={config}
            className="plot-body"
            displayModeBar={false}
          />
        </Grid>
      </React.Fragment>
    );
  }

  render() {
    const { isLoading } = this.props;
    if (this.isError()) return null;
    return isLoading ? this.loading() : this.chart();
  }
}

export default connect()(withChartById(PlotlyChart));
