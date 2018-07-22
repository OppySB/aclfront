import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css';
import logo from '../../logo.png';
import Signin from '../Forms/Signin';
import Inscription from '../Inscription/Inscription';
import Association from '../Association/Association';
import Contact from '../Contact/Contact';
import Photo from '../Photo/Photo';


/**
 * Handling Menu and rooting
 */
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() { 
    return (
    <Router>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <img className="mb-4" src={logo} alt="" width="72" height="72" />
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <Link to="/" class="nav-link js-scroll-trigger">Accueil</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/association" class="nav-link js-scroll-trigger" >Association</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/inscriptions" class="nav-link js-scroll-trigger" >Inscription</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/photos" class="nav-link js-scroll-trigger" >Photo</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/contact" class="nav-link js-scroll-trigger" >Contact</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/connexion" class="nav-link js-scroll-trigger" >Connexion</Link>
                      </li>
                  </ul>

                  <Route path="/association" component={Association} />
                  <Route path="/inscription" component={Inscription} />
                  <Route path="/photo" component={Photo} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/connexion" component={Signin} />
              </div>
          </div>
        </nav>
    </Router>
    );
   }
} 

export default Menu;
