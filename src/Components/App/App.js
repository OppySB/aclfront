import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Agenda from '../Agenda/Agenda';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery.easing/jquery.easing.min.js';
import 'jquery/dist/jquery.min.js';
import 'scrollreveal/dist/scrollreveal.min.js';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

/**
 * Handle all the page
 */
class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <Agenda />
      </div>
     
    );
  }
}
export default App;

