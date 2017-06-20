import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Icon from './components/Dashboard/Menu.jsx';
import APIHome from './components/API/Home.jsx';
import UDEHome from './components/UDE/Home.jsx';
import ADFHome from './components/ADF/Home.jsx';
import CICDHome from './components/CICD/Home.jsx';
import UIModelHome from './components/UIModel/Home.jsx';
import WeaveOnHome from './components/WeaveOn/Home.jsx';
import HatchOnHome from './components/HatchOn/Home.jsx';
import ModestaHome from './components/Modesta/Home.jsx';

const dash = (
  <Grid>
    
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/adf" className="icon-text">ADF</Link>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/ude" className="icon-text">UDE</Link>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/cicd" className="icon-text">CI/CD</Link>
        </div>
      </Col>
    </Row>
    <br/>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/ui-model" className="icon-text">UI Model</Link>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/weave-on" className="icon-text">Weave On</Link>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/api" className="icon-text">API</Link>
        </div>
      </Col>
    </Row>
    <br/>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/hatch-on" className="icon-text">Hatch On</Link>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="icon boxshadow">
          <Link to="/modesta" className="icon-text">Modesta</Link>
        </div>
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
          <Panel header="Apps" className="text-center">
  	      	<div className="panel-body">
  	      		{dash}
  	        </div>
    	    </Panel>
  	    </div>
      </div>
    );
  }
}

ReactDOM.render(
  // <Home title="ADF"/>,
  // <App />,
  (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/ude" component={UDEHome}/>
    <Route path="/adf" component={ADFHome}/>
    <Route path="/api" component={APIHome}/>
    <Route path="/cicd" component={CICDHome}/>
    <Route path="/ui-model" component={UIModelHome}/>
    <Route path="/weave-on" component={WeaveOnHome}/>
    <Route path="/hatch-on" component={HatchOnHome}/>
    <Route path="/modesta" component={ModestaHome}/>
  </Router>
),
  // <Router history={hashHistory}>
  //   <Route path="/" component={App}>
  //     <IndexRoute component={APIHome}/>
  //     <Route path="ude" component={UDEHome} />
  //   </Route>
  // </Router>,
  document.getElementById('app')
);