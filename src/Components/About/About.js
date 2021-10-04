import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Banner from '../../images/banner.png'
import './About.css'
const About = () => {
    return (
        <div className="mt-2">
           <NavBar></NavBar>
           <div className="about-container">
            <div className="row banner">
            <div className="col-md-4 banner-txt">
                    <h3 className="text-break fw-bold">We share knowledge <br /> with the world</h3>
                    <p className="text-break">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                </div>
                <div className="col-md-8 about-img">
                <img src={Banner} alt="" className="" />
                </div>
                
            </div>
            <div className="row grow bg-primary text-center text-white">
                <div className="col-md-4 ">
                    <h2>44M+
                        <br />
                        <small>leraners</small>
                    </h2>
                </div>
                <div className="col-md-4">
                    <h2>65k+
                        <br />
                        <small>instructors</small>
                    </h2>
                </div>
                <div className="col-md-4">
                    <h2>183k+ 
                        <br />
                        <small>courses</small>
                    </h2>
                </div>
            </div>
           </div>
           <div className="color-cards row ">
               <div className="col-md-4  text-primary border border-primary p-3 m-2 w-25">
                <div>
                   <h3>Work With Us</h3> 
                </div>
                <div>
                At NOOB, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.
                </div>
               </div>
               <div className="col-md-4  text-white bg-primary p-3 m-2">
                <div>
                   <h3>See our research</h3> 
                </div>
                <div>
                We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.
                </div>
               </div>
               <div className="col-md-4 text-primary border border-primary p-3 m-2 w-25">
                <div>
                   <h3>Read our blog</h3> 
                </div>
                <div>
                Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.
                </div>
               </div>
            </div>
             <Footer></Footer> 
           </div>
           
        
    );
};

export default About;