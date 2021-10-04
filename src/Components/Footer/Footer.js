import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>NOOB Inc.</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                   <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="icon">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube}/>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with NOOB through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in class actions, as detailed in the Dispute Resolution section.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Noob © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Courses</li>
                  <li className="footer-menu">About Us</li>
                  <li className="footer-menu">Contact us</li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                   <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="text-primary fs-2">
                 <FontAwesomeIcon icon={faHome} />
                  </div>
                  <div>
                    <p className="pt-1">
                    600 Harrison St. – 3rd Floor
                      <br /> San Francisco, CA 94107

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;