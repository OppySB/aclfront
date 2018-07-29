import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import logo from '../../logo.png';

import Signin from '../Forms/Signin';
import Inscription from '../Inscription/Inscription';
import Association from '../Association/Association';
import Contact from '../Contact/Contact';
import Photo from '../Photo/Photo';
import Home from '../Home/Home';

/**
 * Handle all the page
 */
class App extends Component {
  render() {
    return (
        <Router>
        <nav >
          <div className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                  <img className="mb-4" src={logo} alt="" width="72" height="72" />
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to="/" className="nav-link js-scroll-trigger">Accueil</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/association" className="nav-link js-scroll-trigger" >Association</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/inscription" className="nav-link js-scroll-trigger" >Inscription</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/photo" className="nav-link js-scroll-trigger" >Photo</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/contact" className="nav-link js-scroll-trigger" >Contact</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/connexion" className="nav-link js-scroll-trigger" >Connexion</Link>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

        <Route exact path="/" component={Home} />
        <Route path="/association" component={Association} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/photo" component={Photo} />
        <Route path="/contact" component={Contact} />
        <Route path="/connexion" component={Signin} />
        </nav>
    </Router>
    );
  }
}
export default App;

