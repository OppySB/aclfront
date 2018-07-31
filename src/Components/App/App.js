import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Agenda from '../Agenda/Agenda';


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

