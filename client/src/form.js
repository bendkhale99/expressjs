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
      <Form.Label>Course Selected</Form.Label>
      <Form.Control as="select" defaultValue="Select the Course" >
      <option>Select the course...</option>
      <option>Python Programming</option>
      <option>Sudoku</option>
      <option>Chess</option>
      <option>Rubik's Cube</option>
      <option>Web Development</option>
      <option>Maths Olympiad</option>

      </Form.Control>
    </Form.Group>
  
    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address 1</Form.Label>
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
          <option value="andhra_pradesh">Andhra Pradesh</option>
          <option value="arunachal_pradesh">Arunachal Pradesh</option>
          <option value="assam">Assam</option>
          <option value="bihar">Bihar</option>
          <option value="chhatisgarh">Chhatisgarh</option>
          <option value="goa">Goa</option>
          <option value="gujarat">Gujarat</option>
          <option value="haryana">Haryana</option>
          <option value="himachal_pradesh">Himachal Pradesh</option>
          <option value="jammu_kashmir">Jammu and Kashmir</option>
          <option value="jharkand">Jharkand</option>
          <option value="karnataka">Karnataka</option>
          <option value="kerala">Kerala</option>
          <option value="madhya_pradesh">Madhya Pradesh</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="manipur">Manipur</option>
          <option value="meghalaya">Meghalaya</option>
          <option value="mizoram">Mizoram</option>
          <option value="nagaland">Nagaland</option>
          <option value="orissa">Orissa</option>
          <option value="punjab">Punjab</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="sikkim">Sikkim</option>
          <option value="tamil_nadu">Tamil Nadu</option>
          <option value="tripura">Tripura</option>
          <option value="uttar_pradesh">Uttar Pradesh</option>
          <option value="west_bengal">West Bengal</option>
          <option value="telangana">Uttar Pradesh</option>
          <option value="andaman_and_nicobar_islands">Andaman and Nicobar Islands</option>
          <option value="chandigarh">Chandigarh</option>
          <option value="dadar_and_nagar_haveli_and_daman_diu">Dadar and Nagar Haveli and Daman and Diu</option>
          <option value="jammu_and_kashmir">Jammu and Kashmir</option>
          <option value="ladakh">Ladakh</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="delhi">Delhi</option>
          <option value="PondiCherry">Pondicherry</option>

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
      Register Now
    </Button>
  </Form>
)
}

export default InputForm