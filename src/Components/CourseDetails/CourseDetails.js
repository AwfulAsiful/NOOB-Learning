import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './CourseDetails.css'

const CourseDetails = () => {
    
    const[courseDetails,setCourseDetails]=useState([]);
    useEffect(()=>{
        fetch("./fakeData_2.json")
        .then(res=>res.json())
        .then(data=>setCourseDetails(data));
    },[]);
    
    return (
        <div className="">
            <NavBar></NavBar>
            {
                courseDetails?.map((d)=>  
                <div className="course-details d-flex"
                key={d.id}>
                <div className="teacher-img w-50">
                    <img src={d.teacher} alt="" />
    
                </div>
                <h2>{d.tName}</h2>
                <p>{d.desc}</p>
                </div>)
            }
          
           <Footer></Footer>

        </div>
    );
};

export default CourseDetails;