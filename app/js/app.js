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
      <div id="wrapper">

          <header id="header">
            <div className="inner">

                <a href="/" className="logo">
                  <span className="symbol"><img src="app/images/logo.svg" alt="" /></span><span className="title">Apps & Tools</span>
                </a>

                <nav>
                  <ul>
                    <li><a href="#menu">Menu</a></li>
                  </ul>
                </nav>

            </div>
          </header>

          <nav id="menu">
            <h2>Menu</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="about.html">About</a></li>
            </ul>
          </nav>

          <div id="main">
            <div className="inner">
              <header>
                <h1>This is Apps portal - one place for all the tools and apps<br/></h1>
              </header>
              <section className="tiles">
                <article className="style1">
                  <span className="image">
                    <img src="app/images/pic01.jpg" alt="" />
                  </span>
                  <Link to="/adf" className="icon-text">
                    <h2>ADF</h2>
                    <div className="content">
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </Link>
                </article>
                <article className="style2">
                  <span className="image">
                    <img src="app/images/pic02.jpg" alt="" />
                  </span>
                  <Link to="/ude" className="icon-text">
                    <h2>UDE</h2>
                    <div className="content">
                      <p>Unified Development Environment - A Platform agnostic and framework agnostic IDE for developing...</p>
                    </div>
                  </Link>
                </article>
                <article className="style3">
                  <span className="image">
                    <img src="app/images/ci-cd.png" alt="" />
                  </span>
                  <Link to="/cicd" className="icon-text">
                    <h2>DEF(CI/CD)</h2>
                    <div className="content">
                      <p>Developer Enablement Framework is a platform for automating Continous Integration and Continous Deployment...</p>
                    </div>
                  </Link>
                </article>
                <article className="style4">
                  <span className="image">
                    <img src="app/images/uimodel.png" alt="" />
                  </span>
                  <Link to="/ui-model" className="icon-text">
                    <h2>UI Model</h2>
                    <div className="content">
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </Link>
                </article>
                <article className="style5">
                  <span className="image">
                    <img src="app/images/pic05.jpg" alt="" />
                  </span>
                  <Link to="/weave-on" className="icon-text">
                    <h2>Weave On</h2>
                    <div className="content">
                      <p className="pad">Removes the tedious plumbing and configuration process by generating boiler plate stub....</p>
                    </div>
                  </Link>
                </article>
                <article className="style6">
                  <span className="image">
                    <img src="app/images/api.png" alt="" />
                  </span>
                  <Link to="/api" className="icon-text">
                    <h2>API</h2>
                    <div className="content">
                      <p>API E&M platform comes into picture to tackle the most common problems like security, scalability, availability, service on-boarding and publishing etc...</p>
                    </div>
                  </Link>
                </article>
                <article className="style2">
                  <span className="image">
                    <img src="app/images/pic07.jpg" alt="" />
                  </span>
                  <Link to="/hatch-on" className="icon-text">
                    <h2>Hatch On</h2>
                    <div className="content">
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </Link>
                </article>
                <article className="style3">
                  <span className="image">
                    <img src="app/images/pic08.jpg" alt="" />
                  </span>
                  <Link to="/modesta" className="icon-text">
                    <h2>Modesta</h2>
                    <div className="content">
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </Link>
                </article>
              </section>
            </div>
          </div>

          <footer id="footer">
            <div className="inner">
              <section>
                <h2>Get in touch</h2>
                <form method="post" action="#">
                  <div className="field half first">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="field half">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="field">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value="Send" className="special" /></li>
                  </ul>
                </form>
              </section>
              <section>
                <h2>Follow</h2>
                <ul className="icons">
                  <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
                  <li><a href="#" className="icon style2 fa-github"><span className="label">GitHub</span></a></li>
                  <li><a href="#" className="icon style2 fa-500px"><span className="label">500px</span></a></li>
                  <li><a href="#" className="icon style2 fa-phone"><span className="label">Phone</span></a></li>
                  <li><a href="#" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
              </section>
              <ul className="copyright">
                <li>&copy; Altimetrik. All rights reserved</li>
              </ul>
            </div>
          </footer>

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