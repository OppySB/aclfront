import React, { Component } from 'react';
import './Header.css';
/**
 * Handling Header
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() { 
    return (
    <div className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>Athletic Club de Languidic</strong>
            </h1>
            <hr/>
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">L'Athlétic Club Languidic a été créé en 1979 à l'initiative de Guy Gourden, Daniel Jacob et Alain Le Danvic avec le concours du Club Athlétique Lorientais présidé à l'époque par Armand Thomas et l'aide de Pierre Ollivier.</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Planning de la semaine</a>
          </div>
        </div>
      </div>
    </div>
    );
   }
} 

export default Header;
