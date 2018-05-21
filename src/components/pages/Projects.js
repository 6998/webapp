import React, { Component } from 'react';
import {genericProjectsListRows} from '../../../../cross-platforms/generic-templates'
import SingleProject from '../SingleProject'

class Projects extends React.Component {
  renderProjectsList() {
    return genericProjectsListRows.map((item, index)=>{
      return <SingleProject project={item} key={index}/>
    })
  }

  render() {
    return <div>
      <div className="row">
        <div className="frame col-md-12">
          <h2>
            Github Projects
          </h2>
          {this.renderProjectsList()}
        </div>
      </div>
    </div>
  }
}

export default Projects