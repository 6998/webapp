import React from 'react';
import userActions from '../../../actions/userActions';
import withNewCompany from '../../../containers/withNewCompany';
import CompanyDetails from './CompanyDetails';
import withChartsForUser from '../../../containers/withChartsForUser';
import withAllCharts from '../../../containers/withAllCharts';
import ChartsForUser from '../chart/ChartsForUser';

class EditCompany extends React.PureComponent {
  constructor() {
    super();

    this.isLoading = this.isLoading.bind(this);
    this.content = this.content.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.props.dispatch(userActions.getCompanyById(id));
  }

  isLoading() {
    const { singleCompany } = this.props;
    return singleCompany ? false : true;
  }

  content() {
    const singleCompany = this.props.singleCompany;
    const {
      isLoadingSingleCompany,
      isLoadingChartsForUser,
      isLoadingAllCharts,
      allCharts,
			chartsForUser
    } = this.props;
    const isLoadingCharts = isLoadingAllCharts || isLoadingChartsForUser;
    return (
      <React.Fragment>
        {!isLoadingSingleCompany && <CompanyDetails company={singleCompany} />}
        {!isLoadingCharts && <ChartsForUser allCharts={allCharts} chartsForUser={chartsForUser} />}
        <div />
      </React.Fragment>
    );
  }

  render() {
    return this.content();
  }
}

export default withNewCompany(withAllCharts(withChartsForUser(EditCompany)));
