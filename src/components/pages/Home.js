import React, {Component} from 'react';
import withExample from '../../containers/withExample'
import classnames from 'classnames'
import GenericTable from '../generics/GenericTable'
import {genericRunsListHead, genericRunsListRows, genericProjectListHeaed, genericProjectsListRows} from '../../../../cross-platforms/generic-templates'


class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.props.dispatch(exampleAction.example("test123"));
  }

  renderLabels(labels) {

    return labels.map(item => {
      const class_ = classnames({
        label: true,
        [`label-${item.name}`]: true
      });

      return <div className={class_} key={item.key}>{item.name}</div>
    })
  }

  rendeTable(list) {
    const items = list.map(item => {
      const labels = this.renderLabels(item.labels);
      return <li key={item.id}>
        [{item.project.name}] {item.name}
        <div className="labels">{labels}</div>
      </li>
    });
    return <table class="table table-dark">>{items}</table>
  }

  render() {
    return <div id="homepage">
      <div className="row">
        <div className="col frame frame-default">
          <h2>Active</h2>
          <GenericTable columns={genericRunsListHead} rows={genericRunsListRows}/>
        </div>

        <div className="col frame frame-default">
          <h2>Completed</h2>
          <GenericTable columns={genericRunsListHead} rows={genericRunsListRows}/>
        </div>
      </div>
      <div className="row">
        <div className="col frame frame-default">
          <h2>Projects</h2>
          <GenericTable columns={genericProjectListHeaed} rows={genericProjectsListRows}/>
        </div>
      </div>
    </div>
  }
}

export default withExample(Home)