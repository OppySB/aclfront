import React, { Component } from 'react';
import Header from '../Header/Header';
import Agenda from '../Agenda/Agenda';
class Home extends Component {
  render() {
    return (
      <div>
      <Header />
      <Agenda />
      </div>
    );
  }
}
export default Home;

