import React from 'react';
import {Table } from 'react-bootstrap';
import './contact.css';

function Contact() {
return(
<Table striped  hover id="Contact">
  <thead>
    <tr>
      <th>Location</th>
      <th>Mail us</th>
      <th>24/7 Helpline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pune, Maharashtra</td>
      <td>contactus@mandelbrot.com</td>
      <td>+91 9764068370</td>
    </tr>
  </tbody>
</Table>
)
}

export default Contact