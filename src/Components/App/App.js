import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

/**
 * Handle all the page
 */
class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
      </div>
     
    );
  }
}
export default App;

