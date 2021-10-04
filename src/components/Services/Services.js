import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Services = () => {
  // data fetching
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./allData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <h3 className='text-capitalize py-4' style={{ backgroundColor: "#F5F5F5" }}>
        Our all services
      </h3>
      <section className='course-container container my-5'>
        {courses.map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </section>
    </>
  );
};

export default Services;
