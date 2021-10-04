import React from 'react';
import NavBar from '../NavBar/NavBar';
import Woman from '../../images/banner-woman.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="mt-2">
          <NavBar></NavBar>
        <div className="banner-container">

          <div className="row banner">
            
            <div className="col-md-6">
              <h3 className="title">
                Learn Programming<br /> With us.
              </h3>
              <p className="text-center mt-3">
                There's always something new to learn.As our company name suggests our main focus is on absolutely beginners in programming. 
              </p>
              <button className="mt-3 about-btn">About Us</button>
            </div>
            <div className="col-md-6 mt-2">
              <img src={Woman} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;