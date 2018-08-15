import React, { Component } from 'react';
import '../App/App.css';
class Contact extends Component {
  render() {
    return (
      <div id="contact" className="margin-contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h2 class="section-heading">Restons en contact!</h2>
              <hr class="my-4" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center">
              <i class="fa fa-phone fa-3x mb-3 sr-contact"></i>
              <p>02.97.65.26.83</p>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
              <p>
                <a href="mailto:your-email@your-domain.com">contact-acl-languidic@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;

