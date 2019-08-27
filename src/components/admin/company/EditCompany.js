import React from 'react';
import userActions from '../../../actions/userActions';
import withNewCompany from '../../../containers/withNewCompany';
import CompanyDetails from './CompanyDetails';
import withChartsForUser from '../../../containers/withChartsForUser';
import withAllCharts from '../../../containers/withAllCharts';

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

	componentWillUnmount() {
    this.props.dispatch(userActions.cleanCompany());
  }

  isLoading() {
    const { singleCompany } = this.props;
    return singleCompany ? false : true;
  }

  loadingDiv() {
    return <div>Loading</div>;
  }

  content() {
    const {
      isLoadingSingleCompany,
      singleCompany,
    } = this.props;
    return (
      <React.Fragment>
        {isLoadingSingleCompany ? (
          this.loadingDiv()
        ) : (
          <CompanyDetails company={singleCompany} />
        )}
        <div />
      </React.Fragment>
    );
  }

  render() {
    return this.content();
  }
}

export default withNewCompany(withAllCharts(withChartsForUser(EditCompany)));
