import React, { Component } from 'react';

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
      	<div className="icon boxshadow">
      		<a href={this.props.url} className="icon-text">{this.props.displayText}</a>
      	</div>
      </div>
    );
  }
}