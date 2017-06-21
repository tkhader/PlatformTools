import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default class WeaveOnHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="app/styles/common.css" />
        <div className="container">
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Apps</a>
              </div>
            </div>
          </nav>
        </div>
        <Panel header="Weave On">
        <div className="container">
          <ul className="nav nav-pills nav-stacked col-md-2">
            <li className="active"><a href="#tab_a" data-toggle="pill">Weave On - Overview</a></li>
            <li><a href="#tab_b" data-toggle="pill">Scope & Roadmap</a></li>
            <li><a href="#tab_c" data-toggle="pill">Change Log with Version</a></li>
            <li><a href="#tab_d" data-toggle="pill">Testbeds</a></li>
            <li><a href="#tab_e" data-toggle="pill">Server Details</a></li>
            <li><a href="#tab_f" data-toggle="pill">Demo</a></li>
            <li><a href="#tab_g" data-toggle="pill">Repo Details</a></li>
          </ul>
          <div className="tab-content col-md-10">
                  <div className="tab-pane active" id="tab_a">
                       <h4>Overview</h4>
                      <p>Removes the tedious plumbing and configuration process by generating boiler plate server stub for multiple programming language. The code generated from WEAVON will be complete in REST Service and DAO layers.The library will be packaged as a maven/gradle project that can be easily added as a module to the parent project, Allowing Faster deployment and better adoption.</p>
                  </div>
                  <div className="tab-pane" id="tab_b">
                       <h4>Scope & Roadmap</h4>
                      <p></p>
                  </div>
                  <div className="tab-pane" id="tab_c">
                       <h4>Change Log with Version</h4>
                      <p>1.Authentication and Authorization Layer, defaulted to ALtimetrik SSO Service</p>
            <p>2. VAlidation stub hooked for primary validation</p>
            <p>3.ORM Provider implementation based selected ORM Framework.</p>
                  </div>
                  <div className="tab-pane" id="tab_d">
                       <h4>Testbeds</h4>
                      <p>Testbeds</p>
                  </div>
                  <div className="tab-pane" id="tab_e">
                       <h4>Server Details</h4>
                      <p><a className="anchroUnderLine" target="_blank" href="http://192.168.91.56:8080/weavon/#/">Server details</a></p>
                  </div>
                  <div className="tab-pane" id="tab_f">
                       <h4>Demo</h4>
                      <p>
            <a className="anchroUnderLine" target="_blank" href="https://o365altimetrik-my.sharepoint.com/personal/vnithianandam_altimetrik_com/_layouts/15/guestaccess.aspx?guestaccesstoken=M7DHrr%2ftivgiVE%2b3JH0TVVSfXC%2fsPmr9ocqpDL94cD4%3d&docid=2_08b5619ab28aa4f6f918ae6fd77d07015&rev=1">Demo</a></p>
                  </div>
                  <div className="tab-pane" id="tab_g">
                       <h4>Repo Details</h4>
                      <p>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/70/weavon-nxt.git</p>
                  </div>
          </div>
          </div>
        </Panel>
        </div>
      </div>
    );
  }
}