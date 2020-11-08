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
<Table    hover className="footertext">
  <thead>
    <tr>
      <th>About MandleBrot</th>
      <th>Contact us</th>
      <th>Terms Conditions</th>
      <th>Privacy Policy </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Courses</td>
      <td>Careers</td>
      <td>Book Demo</td>
      <td>FAQ</td>
    </tr>
  </tbody>
</Table>



<p className="footerext">@2020, MandelBrot, All Rights Reserved</p>

</div>
)
}

export default Footer