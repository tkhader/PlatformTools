import React, { Component } from 'react';
// import styles from '../../../styles/common.css';

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
      	<div className="icon boxshadow">
      		<p className="icon-text">{this.props.displayText}</p>
      	</div>
      </div>
    );
  }
}