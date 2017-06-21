import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default class UIModelHome extends Component {
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
        <Panel header="UI Model">
        <div className="container">
          <ul className="nav nav-pills nav-stacked col-md-2">
            <li className="active"><a href="#tab_a" data-toggle="pill">UI Model - Overview</a></li>
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
                      <p>Quick accelerator for UI traditional developer to get the REST API weaved on to the UI. Generated the complete UI framework with the Swagger Json input/ a REST API spec. User will be able to provide the rich UI face for any REST based APIs. Based on the Swagger spec json that been used by the Weavon application, the Swagger APIs are been used for the UI modeling with the UI specific descriptions. UI Modeling will hold each respective details and then the complete json that would represent the UI Model. Once the API is been parsed, just the API need to be added to the Menu Item so that the UI will be rendered according to the representation.</p>
                  </div>
                  <div className="tab-pane" id="tab_b">
                       <h4>Scope & Roadmap</h4>
                      <p>1. CURD functionlities for the exisiting available REST API.</p>
            <p>2. React JS + Material CSS</p>
            <p>3. Angular JS + Bootstrap CSS</p>
                  </div>
                  <div className="tab-pane" id="tab_c">
                       <h4>Change Log with Version</h4>
                      <p>1. Adding style support for field components.</p>
            <p>2. Updating Handlebars template</p>
                  </div>
                  <div className="tab-pane" id="tab_d">
                       <h4>Testbeds</h4>
                      <p></p>
                  </div>
                  <div className="tab-pane" id="tab_e">
                       <h4>Server Details</h4>
                      <p></p>
                  </div>
                  <div className="tab-pane" id="tab_f">
                       <h4>Demo</h4>
                      <p>
           <a className="anchroUnderLine" target="_blank" href=" https://o365altimetrik-my.sharepoint.com/personal/dkumarasamy_altimetrik_com/_layouts/15/guestaccess.aspx?guestaccesstoken=DfKa6%2fcLHByGsUVz36ymmkfUn0Di9F8BR%2fg61PZppNI%3d&docid=2_19381c242fc2b4d6ab4c087a447b6a30d&rev=1" >Demo</a>
           </p>
                  </div>
                  <div className="tab-pane" id="tab_g">
                       <h4>Repo Details</h4>
                      <p>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/74/uimodeling.git</p>
                  </div>
          </div>
          </div>
        </Panel>
        </div>
      </div>
    );
  }
}