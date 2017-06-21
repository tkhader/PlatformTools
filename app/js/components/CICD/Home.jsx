import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default class CICDHome extends Component {
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
        <Panel header="CICD">
        <div className="container">
          <ul className="nav nav-pills nav-stacked col-md-2">
            <li className="active"><a href="#tab_a" data-toggle="pill">DEF(CI/CD) - Overview</a></li>
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
                      <p>Developer Enablement Framework is a platform for automating Continous Integration and Continous Deployment for any existing project or for a brand new project. This platform also provides the Virtual Machine provisioning and deployment automation to various cloud vendors like Pivotal Cloud Foundry, AWS etc.</p>
                  </div>
                  <div className="tab-pane" id="tab_b">
                       <h4>Scope & Roadmap</h4>
                      <p>Details provided in the Excel attached.</p>
                  </div>
                  <div className="tab-pane" id="tab_c">
                       <h4>Change Log with Version</h4>
                      <p>1. Added Concourse Integration </p>
            <p>2. Added Jenkins integration.</p>
                  </div>
                  <div className="tab-pane" id="tab_d">
                       <h4>Testbeds</h4>
                      <p>Testbeds</p>
                  </div>
                  <div className="tab-pane" id="tab_e">
                       <h4>Server Details</h4>
                      <p><a className="anchroUnderLine" target="_blank"  href="http://192.168.115.155">Server Details</a></p>
                  </div>
                  <div className="tab-pane" id="tab_f">
                       <h4>Demo</h4>
                      <p><a className="anchroUnderLine" target="_blank"  href="https://o365altimetrik.sharepoint.com/sites/CloudIntegrate/DEF/Forms/AllItems.aspx" >Demo</a></p>
                  </div>
                  <div className="tab-pane" id="tab_g">
                       <h4>Repo Details</h4>
                      <p>ssh://phvcs@platformworks.altimetrik.com:2222/source/DEF2.0.git</p>
                  </div>
          </div>
          </div>
        </Panel>
        </div>
      </div>
    );
  }
}