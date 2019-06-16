import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withAllCharts from '../../../containers/withAllCharts';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';

class ChartsList extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      searchValue: null,
      filteredList: null
    };
    this.singleChart = this.singleChart.bind(this);
    this.getListOfCharts = this.getListOfCharts.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(event) {
    const { target } = event;
    const { value } = target;
    const { allCharts } = this.props;
    const filteredList = allCharts.filter(
      chart =>
        chart.filetype === 'plot' &&
        chart.filename.toLowerCase().includes(value)
    );

    this.setState({ filteredList, searchValue: value });
  }

  getListOfCharts() {
    const { filteredList } = this.state;
    const { allCharts } = this.props;
    if (!filteredList) return allCharts;

    return filteredList;
  }

  singleChart(chart) {
    const { image_urls } = chart;
    const imageUrl = image_urls.default;
    return (
      <Paper key={chart.fid} className="frame" elevation={1}>
        <Grid container className="inner no-padding">
          <Grid item xs={12}>
            <Typography variant="headline" component="h4">
              {chart.filename}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={imageUrl} alt=''/>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  chartsList() {
    const allCharts = this.getListOfCharts();
    return allCharts
      .filter(chart => chart.filetype === 'plot')
      .map(chart => this.singleChart(chart));
  }

  searchBox() {
    return (
      <div className="frame">
        <Grid container spacing={8} className="inner admin-chart-list-search">
          <Grid item xs={4} className="no-padding">
            <input
              onChange={this.handleChangeSearch}
              className="text-field"
              placeholder="Search"
            />
          </Grid>
        </Grid>
      </div>
    );
  }

  content() {
    return (
      <React.Fragment>
        {this.searchBox()}
        {this.chartsList()}
      </React.Fragment>
    );
  }

  render() {
    const { isLoadingAllCharts } = this.props;
    return isLoadingAllCharts ? <div>Loading</div> : this.content();
  }
}

ChartsList.defaultProps = {
  chartsList: [],
  isLoadingAllCharts: true
};

export default connect()(withAllCharts(ChartsList));
