import * as React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails';
import userActions from '../../../actions/userActions';
import connect from 'react-redux/es/connect/connect';
import withCompaniesList from '../../../containers/withCompaniesList';
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions/ExpansionPanelActions";
import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import withRouter from "react-router/es/withRouter";
import withUser from "../../../containers/withUser";

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userActions.companiesList());
  }

	edit(id) {
  	this.props.history.push(`/admin/company/edit/${id}`);
	}

  singleCompany(company) {
    return (
      <ExpansionPanel key={company._id}>
        <ExpansionPanelSummary
          expandIcon={<i className="material-icons">expand_more</i>}
        >
          {company.companyName}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>
						<li>
							{company.company}
						</li>
						<li>
							{company.email}
						</li>
						<li>
							{company.companyName}
						</li>
					</ul>
        </ExpansionPanelDetails>
				<Divider />
				<ExpansionPanelActions>
					<Button size="small" color="primary" onClick={()=> this.edit(company._id)}>
						Edit
					</Button>
				</ExpansionPanelActions>
      </ExpansionPanel>
    );
  }

  listOfCompanies() {
    const { companiesList } = this.props;
    return companiesList.map(company => this.singleCompany(company));
  }

  render() {
    const list = this.listOfCompanies();
    return <div className="frame">{list}</div>;
  }
}

export default connect()(withRouter(withUser(withCompaniesList(CompanyList))));
