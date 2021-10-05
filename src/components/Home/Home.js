import React, { useEffect, useState } from "react";
import "./Home.css";
import background from "../../images/hero.jpg";
import Course from "../Course/Course";
import { Link } from "react-router-dom";

const Home = () => {
  // data fetching
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./shortData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // hero section image style
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "500px",
    backgroundPosition: "center",
  };

  return (
    <div>
      {/* hero section */}
      <section style={heroStyle}>
        <div className='hero-text'>
          <h1 className='text-capitalize display-2 fw-bold text-danger '>
            Best IT training institute of <span className='text-info'>Bangladesh</span>
          </h1>
          <div className='mt-5'>
            <button className='mx-2 btn btn-primary fw-bold'>Login</button>
            <button className='mx-2 btn btn-danger fw-bold'>Sing Up</button>
          </div>
        </div>
      </section>

      {/* services section */}

      <section className='my-5'>
        <h3 className='text-danger mb-4 team-title'>Our Services</h3>
        <div className='course-container container my-2 text-center'>
          {courses.map((course) => (
            <Course course={course} key={course.id}></Course>
          ))}
        </div>

        {/* see all button */}
        <div className='mt-3'>
          <Link to='/services'>
            <button className='btn btn-danger'>See ALL Courses</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
