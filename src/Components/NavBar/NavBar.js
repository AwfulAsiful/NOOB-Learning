import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div className="MenuBar-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo">
                                <h1 className="text-primary">NOOB</h1>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-container ">
                                <ul className="d-flex align-items-end justify-content-end">
                                    <Link to="/home" className="items">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/course" className="items">
                                        <li>Courses</li>
                                    </Link>
                                    <Link to="/about" className="items">
                                        <li>About us</li>
                                    </Link>
                                    <Link to="/contact" className="items">
                                        <li>Contact us</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;