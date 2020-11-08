import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './navbar.css';

function Navigation() {
    return (
    <>
  
  <Navbar bg="primary" variant="dark" className="navbar">
  <img src={process.env.PUBLIC_URL + '/Logo-05.jpg'} class="Logo" alt="test" height="100" />
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="navtext">Courses</Nav.Link>
      <Nav.Link href="#features" className="navtext">About Us</Nav.Link>
      <Nav.Link href="#pricing" className="navtext">Contact Us</Nav.Link>
    </Nav>

    <Button variant="outline-light">Login</Button>


    </Navbar>
    
    


  <br />
 
  </>
    )
}

export default Navigation
