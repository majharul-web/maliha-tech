import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section>
      <div className='notFound-container'>
        <h2 className='notFound-title text-danger'>404</h2>
        <h2 className='fs-1 text-danger'>opps! Page not found</h2>
        <p className='fw-bold fs-5 mt-3'>Opps!The page you r looking for dose not exist.It might have been moved or deleted</p>

        {/* button */}
        <div>
            <Link to='/home'><button className='mx-2 btn btn-primary'>Home</button></Link>
            <Link to='/contact'><button className='mx-2 btn btn-danger'>Contact Us</button></Link>                 
        </div>
      </div>
    </section>
  );
};

export default NotFound;
