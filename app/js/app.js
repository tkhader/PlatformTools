import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Icon from './components/Dashboard/Menu.jsx';

const dash = (
  <Grid>
    <Row className="show-grid">
      <Col md={4}></Col>
      <Col md={3}><h2>Apps</h2></Col>
      <Col md={4}></Col>
    </Row>
    <br/>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <Icon displayText="ADF" />
      </Col>
      <Col xs={6} md={4}>
        <Icon displayText="UDE" />
      </Col>
      <Col xs={6} md={4}>
        <Icon displayText="CICD" />
      </Col>
    </Row>
    <br/>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <Icon displayText="UI Model" />
      </Col>
      <Col xs={6} md={4}>
        <Icon displayText="Weave On" />
      </Col>
      <Col xs={6} md={4}>
        <Icon displayText="API" />
      </Col>
    </Row>
    <br/>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <Icon displayText="Hach On" />
      </Col>
      <Col xs={6} md={4}>
        <Icon displayText="Modesta" />
      </Col>
      <Col xs={6} md={4}>
      </Col>
    </Row>
  </Grid>
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
        <div className="panel panel-default">
	      	<div className="panel-body">
	      		{dash}
	        </div>
	    </div>
	    </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);