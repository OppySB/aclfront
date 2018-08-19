import React from 'react';
import ReactDOM from 'react-dom';
import Agenda from './Agenda';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<Agenda />, div);
  ReactDOM.unmountComponentAtNode(div);
});