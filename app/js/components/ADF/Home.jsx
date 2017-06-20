import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default class ADFHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
        <div>
          <a href="/">Home</a>
        </div>
        <Panel header="ADF">
        <div className="container">
          <ul className="nav nav-pills nav-stacked col-md-2">
            <li className="active"><a href="#tab_a" data-toggle="pill">ADF - Overview</a></li>
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
                      <p>Overview</p>
                  </div>
                  <div className="tab-pane" id="tab_b">
                       <h4>Scope & Roadmap</h4>
                      <p>Scope & Roadmap</p>
                  </div>
                  <div className="tab-pane" id="tab_c">
                       <h4>Change Log with Version</h4>
                      <p>Change Log with Version</p>
                  </div>
                  <div className="tab-pane" id="tab_d">
                       <h4>Testbeds</h4>
                      <p>Testbeds</p>
                  </div>
                  <div className="tab-pane" id="tab_e">
                       <h4>Server Details</h4>
                      <p>Server Details</p>
                  </div>
                  <div className="tab-pane" id="tab_f">
                       <h4>Demo</h4>
                      <p>Demo</p>
                  </div>
                  <div className="tab-pane" id="tab_g">
                       <h4>Repo Details</h4>
                      <p>Repo Details</p>
                  </div>
          </div>
          </div>
        </Panel>
        </div>
    );
  }
}