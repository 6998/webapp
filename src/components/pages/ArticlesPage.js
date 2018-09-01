import React from 'react';
import withUser from '../../containers/withUser';
import mediumActions from '../../actions/mediumActions';
import withPostsList from '../../containers/withPostsList';
import Grid from '@material-ui/core/Grid/Grid';
import moment from 'moment';
import Link from 'react-router-dom/es/Link';

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(mediumActions.list());
  }

  postsList() {
    const list = [];
    const { postsList } = this.props;
    for (let post in postsList) {
      list.push(this.singlePost(postsList[post]));
    }
    return <React.Fragment>{list}</React.Fragment>;
  }

  singlePost(post) {
    const { creator, title, isoDate, link, formatedLink} = post;
    const date = moment(isoDate).format('LL');
    return (
      <Grid item xs={12} className="post" key={formatedLink}>
        <div className="author">{creator}</div>
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <div className="date">{date}</div>
      </Grid>
    );
  }

  content() {
    return (
      <React.Fragment>
        <div className="banner">
          <h2>Articles</h2>
        </div>
        <Grid className="articles" container>
          {this.postsList()}
        </Grid>
      </React.Fragment>
    );
  }

  render() {
    return <div id='homepage'>{this.content()}</div>;
  }
}

export default withPostsList(ArticlesPage);
