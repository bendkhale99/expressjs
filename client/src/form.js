import React from 'react';
import {Form, Button,Col } from 'react-bootstrap';
import './form.css';

function InputForm() {
return(
    <Form className="inputform">
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control  placeholder="Enter name" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Form.Row>
  
    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>
  
    <Form.Group controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>
  
    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>
  
    <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="Accept Terms and coditions" />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Buy Now
    </Button>
  </Form>
)
}

export default InputForm