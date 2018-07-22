import React, { Component } from 'react';
import logo from '../../logo.png';
import './Signin.css';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleSubmit()
  {
    alert("submit form");
  }

  render() { 
    return (
      <div className="Signin">
        <form className="form-signin">
        <img className="mb-4" src={logo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <input type="checkbox" value="remember-me"/><label htmlFor="remember-me" className=""> Se souvenir de moi</label>
          <button 
          className="btn btn-lg btn-primary btn-block" 
          type="submit" 
          onClick={() => this.handleSubmit()}
          >Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form> 
      </div>
    );
   }
} 

export default Signin;
