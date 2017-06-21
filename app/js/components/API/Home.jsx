import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

export default class APIHome extends Component {
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
        <Panel header="API E&M Track">
        <div className="container">
          <ul className="nav nav-pills nav-stacked col-md-2">
            <li className="active"><a href="#tab_a" data-toggle="pill">API - Overview</a></li>
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
                      <p>API Services are solely responsible for any functional/business use cases implementation irrespective of the front-end application is either mobile or web. And at the same time, it is highly complex and critical, to manage the API services with all the NFRs met. Hence API E&M platform comes into picture to tackle the most common problems like security, scalability, availability, service on-boarding and publishing etc.</p>
                  </div>
                  <div className="tab-pane" id="tab_b">
                       <h4>Scope & Roadmap</h4>
                      
            
            <table className="table">
            <tr>
              <td>
                Admin Console for start and stop of features
              </td>
              <td>
                Admin console
              </td>
              <td>
                <tr>
                  <tr>Admin Console UI</tr>
                  <tr>Link to Service On boarding</tr>
                  <tr>Build/Deploy the service</tr>
                  <tr>Deploy the service</tr>
                  <tr>Associate Test Bed</tr>
                  <tr>Search Filters</tr>
                  <tr>Health Check</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Merge ADF server capabilities/Push notification
              </td>
              <td>
                Alerts & Notification services
              </td>
              <td>
                <tr>
                <tr>Push notification</tr>
                <tr>SMS alerts</tr>
                <tr>Email alerts</tr>
                <tr>OTP</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Modernize Tech stack
              </td>
              <td>
                Context sharing across devices
              </td>
              <td>
                Context sharing across devices
              </td>
            </tr>
            <tr>
              <td>
                Security Authentication & Authorization Mgmt.
              </td>
              <td>
                Security Authentication & Authorization Mgmt.
              </td>
              <td>
                <tr>
                  <tr>SSO (OAUTH2 / OpenID)</tr>
                  <tr>Identity Server integration – Facebook</tr>
                  <tr>Identity Server integration – GitHub</tr>
                  <tr>Identity Server integration – Google</tr>
                  <tr>Identity Server</tr>
                  <tr>Support different Grant Types – Auth code, Implicit, Client  credentials</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Security Authentication & Authorization Mgmt.
              </td>
              <td>
                User management service
              </td>
              <td>
                <tr>
                  <tr>User management service</tr>
                  <tr>Multi Database</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Multi-Tenant support
              </td>
              <td>
                Multi-Tenant support
              </td>
              <td>
                Multi-Tenant support
              </td>
            </tr>
            <tr>
              <td>
                Service on boarding & Discovery
              </td>
              <td>
                Service discovery
              </td>
              <td>
                <tr>
                  <tr>Netflix – Eureka</tr>
                  <tr>Consul</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Service on boarding & Discovery
              </td>
              <td>
                Service on boarding
              </td>
              <td>
                <tr>
                  <tr>Fetch Service Source Code From Git</tr>
                  <tr>Fetch Service Source Code From ftp/Cloud</tr>
                  <tr>Upload Service Source Code as zip</tr>
                  <tr>Fetch Service Binary From Git</tr>
                  <tr>Fetch Service Binary From ftp/Cloud</tr>
                  <tr>Upload Service Binary as jar/war</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                WSO2 Integration
              </td>
              <td>
                API Gateway integration
              </td>
              <td>
                <tr>
                  <tr>Netflix Zuul edge server</tr>
                  <tr>JVM and Non-JVM support</tr>
                  <tr>Cross cutting filters - Security, Logging, Monitoring</tr>
                  <tr>Migration of other stack services</tr>
                  <tr>Versioning</tr>
                  <tr>Service Choreography</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Data Archival & Purge
              </td>
              <td>
                <tr>
                  <tr>Data Services</tr>
                  <tr>Purging</tr>
                </tr>
              </td>
              <td>
                <tr>
                  <tr>Data Services</tr>
                  <tr>Purging</tr>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                Analytics & Integration
              </td>
              <td>
                Analytics & Integration
              </td>
              <td>
                Analytics & Integration
              </td>
            </tr>
            <tr>
              <td>
                Integrations with MDM platforms
              </td>
              <td>
                Integrations with MDM platforms
              </td>
              <td>
                Integrations with MDM platforms
              </td>
            </tr>
            <tr>
              <td>
                Device Integration such as biometrics, etc.,
              </td>
              <td>
                Device Integration such as biometrics, etc.,
              </td>
              <td>
                Device Integration such as biometrics, etc.,
              </td>
            </tr>
            <tr>
              <td>
                Workflow generation
              </td>
              <td>
                Workflow generation
              </td>
              <td>
                Workflow generation
              </td>
            </tr>
            <tr>
              <td>
                Automated Code generation for service layer (Weavon)
              </td>
              <td>
                Weavon as a Service/Any DB connector
              </td>
              <td>
                <tr>
                  <tr>SQL Connector</tr>
                  <tr>No SQL Connector</tr>
                </tr>
              </td>
            </tr>
            
            
            </table>
            
                  </div>
                  <div className="tab-pane" id="tab_c">
                       <h4>Change Log with Version</h4>
            <table>
              <tr>
                <th>Sl.No</th>
                <th>Services</th>
                <th>Features</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>1</td>
                <td>User Management</td>
                <td>
                  <tr>
                    <tr>1. User details maintenance</tr>
                    <tr>2. Multi data sourcing</tr>
                    <tr>3. Permissions for protected resource access</tr>
                    <tr>4. Security questions implementation</tr>
                  </tr>
                </td>
                <td>CI/CD in progress</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alerts and Notification</td>
                <td>
                  <tr>
                    <tr>1. Email alerts/ notfication</tr>
                    <tr>2. SMS alerts/ notification</tr>
                  </tr>
                </td>
                <td>CI/CD in progress</td>
              </tr>
              <tr>
                <td>3</td>
                <td>OTP</td>
                <td>
                  
                </td>
                <td>Ready for deployment</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Password Management</td>
                <td>
                  <tr>
                    <tr>1. Allows password creation criteria to be set</tr>
                    <tr>2. Stores and maintains password</tr>
                    <tr>3. Password encyption support for security</tr>
                    <tr>4. Forgot password support for retrieving password</tr>
                  </tr>
                </td>
                <td>CI/CD in progress</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Fetch Services</td>
                <td>
                  Fetches zip/jar/war/binary and pushes to git
                </td>
                <td>In Development</td>
              </tr>
              <tr>
                <td>6</td>
                <td>GatewayServices</td>
                <td>
                  <tr>
                    Acts as API gateway
                  </tr>
                </td>
                <td>Ready for deployment</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Discovery Service</td>
                <td>
                  <tr>
                    For service discovery
                  </tr>
                </td>
                <td>Ready for deployment</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Login Using Oauth2.0 protocol</td>
                <td>
                  <tr>
                    <tr>1)Login to an application using facebook and github as the
                    authorization servers using OAuth2.0 protocol.</tr>
                    <tr>2) Exposing the login feature as RESTful web services.</tr>
                    <tr>3) Implemented SSO since both my application and facebook/github are logged in at the same time.</tr>
                  </tr>
                </td>
                <td>Ready for deployment</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Login Using OpenID connect protocol</td>
                <td>
                  <tr>
                  <tr>1) Login to an application using google as the authentication and authorization server using openId connect protocol for authentication and OAuth2.0 for authorization.</tr>
                  <tr>2) Exposing the login feature as a RESTful web service.</tr>
                  <tr>3) Implemented SSO since both my application and google plus application were simultaneously logged in.</tr>
                  </tr>
                </td>
                <td>Ready for deployment</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Multitenant application as a service</td>
                <td>
                  <tr>
                  <tr>1)The application is a multitenant application using the multiple schema approach for a single database instance using h2 database.</tr>
                  <tr>2) The application has been exposed as a RESTful web service.</tr>
                  </tr>
                </td>
                <td>Ready for deployment</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Bringing all the social applications together and also the LDAP authentication as a service. </td>
                <td>
                  <tr>
                  <tr>1.Login to an application using facebook and github as the authorization servers using OAuth2.0 protocol.</tr>
                  <tr>2.All the features are exposed  as RESTful web services.</tr>
                  <tr>3. Login to an application using google as the authentication and authorization server using openId connect protocol for authentication and OAuth2.0 for authorization.</tr>
                  <tr>4. Login to an application using LDAP as the authentication server. Here ApacheDS is the LDAP server which comes with Spring.</tr>
                  </tr>
                </td>
                <td>CI/CD in progress</td>
              </tr>
            </table>
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
                       <table >
              <tr>
                <th>Sl.No</th>
                <th>Services</th>
                <th>GIT URL</th>
              </tr>
              <tr>
                <td>1</td>
                <td>User Management</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/107/usermanagement.git</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alerts and Notification</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/90/alerts-notification.git</td>
              </tr>
              <tr>
                <td>3</td>
                <td>OTP</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/108/otp-generation.git</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Password Management</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/107/usermanagement.git</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Fetch Service</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/109/fetch-service.git</td>
              </tr>
              <tr>
                <td>6</td>
                <td>GatewayService</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/93/gateway-service.git</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Discovery Service</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/92/discovery-service.git</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Login Using Oauth2.0 protocol</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/91/ssowithoauth.git</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Login Using OpenID connect protocol</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/96/ssowithopenidconnect.git</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Multitenant application as a service</td>
                <td>ssh://phvcs@platformworks.altimetrik.com:2222/diffusion/106/multitenant-application-as-a-restful-webservice.git</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Bringing all the social applications together and also the LDAP authentication as a service. </td>
                <td></td>
              </tr>
            </table>
                  </div>
          </div>
          </div>
        </Panel>
        </div>
      </div>
    );
  }
}