import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

import './Course.css';

const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("./fakeData_2.json")
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);

    return (
        <div className="course-container my-2">
            <NavBar></NavBar>
            <div className="course row">
                {
                    course?.map((d)=>            
                    <div className="col-md-6 col-lg-4">
                    <div className=" course border border-2 border-primary w-75 p-3 m-3">
                            <div className="img-course">
                                <img className="w-50 rounded rounded-circle" src={d.img} alt="" />
                            </div>
                            <h3 className="text-break">{d.name}</h3>
                            <h4 className="fs-4 text-primary">Offered-by: {d.offered}</h4>
                            <p className="fw-bold">Avg rating:  {d.ratings} </p>
                            <Link to={`/courseDetails/${d.id}`}>
                                <button className="btn btn-primary">Learn More </button>
                            </Link>
                        </div>
                    </div>)
                }


            </div>
          <Footer></Footer>
        </div>
    );
};

export default Course;