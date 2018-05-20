import React, {Component} from 'react';
import withExample from '../../containers/withExample'
import classnames from 'classnames'

const list = [{
  id: 123,
  name: "run #12",
  labels: [{name: "params opt", id: 123}],
  project: {
    id: 123,
    name: "project1"
  },
}];

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

      return <div className={class_}>{item.name}</div>
    })
  }

  renderList() {
    const items = list.map(item => {
      const labels = this.renderLabels(item.labels);
      return <li>
        [{item.project.name}] {item.name}
        <div className="labels">{labels}</div>
      </li>
    });
    return <ul>{items}</ul>
  }

  render() {
    return <div className="">
      <h1>{this.props.name}</h1>
      <div className="row">
        <div className="col frame">
          <h2>Active Runs</h2>
          <ul>
            <li>
              [project name] run #12
              <div className="label">Param Opt</div>
            </li>

          </ul>
        </div>
        <div className="col">
          <h2>Completed</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  }
}

export default withExample(Home)