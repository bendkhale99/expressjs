import React from 'react';
import {Table } from 'react-bootstrap';
//import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import './footer.css';

/*
<MDBContainer>
      <MDBBtn size="lg" tag="a" floating social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="gplus">
        <MDBIcon fab icon="google-plus-g" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
    </MDBContainer>
    */

function Footer() {
return(
<div className="footer">
<Table    className="footertext">
  <thead>
    <tr>
      <th><a href="about">About MandleBrot</a></th>
      <th><a href="Contact">Contact us</a></th>
      <th ><a href="terms">Terms Conditions</a></th>
      <th><a href="privacy">Privacy Policy</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="Courses">Courses</a></td>
      <td><a href="Careers">Careers</a></td>
      <td><a href="FAQ">FAQ</a></td>
    </tr>
  </tbody>
</Table>



<p className="footertext">@2020, MandelBrot, All Rights Reserved</p>

</div>
)
}

export default Footer