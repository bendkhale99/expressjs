import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './navbar.css';
<h1>class</h1>
function Navigation() {
    return (
    <>
  
  <Navbar bg="primary" variant="dark" className="navbar">
    <a href="/">
    <img src={process.env.PUBLIC_URL + '/Logo-01.png'}  class="Logo" alt="test" height="100" />
    </a>
    <Nav className="ml-auto">
      <Nav.Link  smooth href="/" className="navtext">Home</Nav.Link>
      <Nav.Link smooth  href="courses" className="navtext">Courses</Nav.Link>
      <Nav.Link smooth href="about" className="navtext">About Us</Nav.Link>
      <Nav.Link smooth href="Careers" className="navtext">Teach with Us</Nav.Link>
      <Nav.Link smooth href="Contact" className="navtext">Contact Us</Nav.Link>
    </Nav>
    <Button variant="outline-light">Student Login</Button>
    <Button variant="outline-light">Teacher Login</Button>
    </Navbar>
    
    


  <br />
 
  </>
    )
}

export default Navigation
