import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './navbar.css';

function Navigation() {
    return (
    <>
  
  <Navbar bg="primary" variant="dark" className="navbar">
  <img src={process.env.PUBLIC_URL + '/Logo-01.png'} class="Logo" alt="test" height="100" />
    <Nav className="mr-auto">
      <Nav.Link href="#Home" className="navtext">Home</Nav.Link>
      <Nav.Link href="#Courses" className="navtext">Courses</Nav.Link>
      <Nav.Link href="#About Us" className="navtext">About Us</Nav.Link>
      <Nav.Link href="#Contact Us" className="navtext">Contact Us</Nav.Link>
    </Nav>
    <Button variant="outline-light">Student Login</Button>
    <Button variant="outline-light">Teacher Login</Button>

    </Navbar>
    
    


  <br />
 
  </>
    )
}

export default Navigation
