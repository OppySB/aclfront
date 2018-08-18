import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="section white-bg" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <h2 className="section-heading">Besoin de nous contacter?</h2>
                    <hr className="my-4" />
                    <p className="mb-5">Vous pouvez nous joindre par téléphone ou par email.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center">
                    <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                    <p>02.97.65.26.83</p>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                    <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
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
export default Footer;

