import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Courses.css';
const Courses = () => {
    const[courses,setCourses]=useState("");
    const[allCourses,setAllCourses]=useState([]);
    const handleChange = (e) => {
        const searchText = e.target.value;
        setCourses(searchText);
    };
    useEffect(()=>{
        fetch("./fakeData_1.json")
        .then(res=>res.json())
        .then(data=>setAllCourses(data));
    },[])
   
    return (
        <div className="container all-teams">
        <div className="all-team">
          <h1>Our Teams</h1>
        </div>
        <div className="search-team">
          <input onChange={handleChange} className="p-2" type="text" />{" "}
          <button className="btn p-2 btn-primary mb-1">Search</button>
        </div>
        <div className="teams">
          <div className="row">
            {allCourses?.map((pd) => (
              
              <div className="col-md-6" >
                <div className="cart">
                  <div className="cart-details">
                    <img className="img-fluid" src={pd.img} alt="" />
                  </div>
                  <div className="text-area">
                    <h4>{pd.name}</h4>
                    <p className="text-break">{pd.desc}</p>
                  
                    <Link to={`/course`}>
                      <button className="btn btn-outline-primary">Explore</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;