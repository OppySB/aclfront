import React, { Component } from 'react';
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
      <div className="container">
      <div className="Signin">
        <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Veuillez vous connecter</h1>
          <label htmlFor="inputEmail" className="sr-only">Login</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Login" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Mot de passe</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Mot de passe" required />
          <input type="checkbox" value="remember-me"/><label htmlFor="remember-me" className="loginMargin"> Se souvenir de moi</label>
          <button 
          className="btn btn-lg btn-primary btn-block" 
          type="submit" 
          onClick={() => this.handleSubmit()}
          >Sign in
          </button>
        </form> 
      </div>
      </div>
    );
   }
} 

export default Signin;
