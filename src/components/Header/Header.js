import React from "react";
import { Container, Nav, Navbar,} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const selected = {
    fontWeight: "bold",
    color: "white",
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' className='fs-2 fw-bold text-primary'>
          
          Maliha tech.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto fw-bold fs-6 text-white text-uppercase'>
            <NavLink to='/home' activeStyle={selected} className='active mx-3'>
              Home
            </NavLink>
            <NavLink to='/about' activeStyle={selected} className='active mx-3'>
              About Us
            </NavLink>
            <NavLink to='/services' activeStyle={selected} className='active mx-3'>
              Services
            </NavLink>
            <NavLink to='/contact' activeStyle={selected} className='active mx-3'>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
