import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='my-5 text-center footer py-4'>
      <div>
        <a className='mx-2' href='/'>
          <i className='fab fa-facebook fs-2'></i>
        </a>
        <a className='mx-2' href='/'>
        <i className="fab fa-linkedin fs-2"></i>
        </a>
        <a className='mx-2' href='/'>
        <i className="fab fa-twitter fs-2"></i>
        </a>
      </div>
      <p className='text-secondary mt-3'>© 2021 Maliha tech.All rights reserved Dhaka, Bangladesh.</p>
    </footer>
  );
};

export default Footer;
