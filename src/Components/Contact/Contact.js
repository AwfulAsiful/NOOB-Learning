import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Contact = () => {
    return (
        <div className="my-2">
            <NavBar></NavBar>
           <h2 className="py-4">Hello! From Contact Component</h2> 
           <Footer></Footer>
        </div>
    );
};

export default Contact;