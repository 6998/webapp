import React, { Component } from 'react';

class CometButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (){
    const url = this.props.url;
    if(!url)
      return;
    window.location = url
  }
  CometButton() {
    return <button className={this.props.class} onClick={this.handleClick}>Comet.ml</button>;
  }
}

export default CometButton