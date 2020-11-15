import React from 'react'
import {Tab, Row,Col,ListGroup,Card,Button } from 'react-bootstrap';
import './rubik.css';


function Rubik(){
    return (
    <div className="Rubik">
        <div className="start">
            <h1 className="heading">Rubik's Cube</h1>
        </div>     
       
       <div className="sidebyside"> 
        <div className="firstdiv">
        <h3 className="subheader"><b>Course Overview</b> </h3>
        <p>Rubik's Cube is single player logic based game where 3*3 cube consists of 
            6 faces , 27 small coloured cubes . Aim of the puzzle is to bring make all 
            faces of the cube of the same colour. Course will start with nomenclature of faces
            Through the course iterative you will learn 
            simple to  complex techniques on solving rubik's . Advanced 
            people will also learn many speed cubing techniques. 
            After completion of course you will not only able to solve cube but also
            able to solve cube fast which are competent at national levels.
         </p>
        </div>
        
        <div className="seconddiv">
            <h3 className="subheader"><b>Topics Covered</b></h3>
            <ul>
                <li>Intro to Rubik's Cube</li>
                <li>F,L,U notation</li>
                <li>Solving single face</li>
                <li>Middle layer </li>
                <li>Upper Layer</li>
                <li>Intro to speedcubing</li>
                <li>God's number and optimality</li>
                <li>CFOP Technique</li>
                <li>2*2*2 ,4*4*4 cube solving</li>
                <li>Mirror Cube solving</li>
            </ul>
        </div>
        </div>

        <div className="sidebyside"> 
            <div className="firstdiv">
            <h3 className="subheader"><b>Available Batches</b></h3>
            <Tab.Container   defaultActiveKey="#link1">
                 <Row>
                 <Col sm={40}>
                    <ListGroup className="batchlist">
                        <ListGroup.Item action href="#link1">
                            <b>Batch1 :</b> 2 January 2021 - 21 February 2021 Sat, Sun 3:00-5:00 pm
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            <b>Batch2 :</b> 2 January 2021 - 21 February 2021 Sat, Sun 6:00-8:00 pm 
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            <b>Batch3 :</b> 16 January 2021 - 7 March 2021 Sat, Sun 3:00-5:00 pm 
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                            <b>Batch4 :</b> 16 January 2021 - 7 March 2021 Sat, Sun 6:00-8:00 pm 
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        </Tab.Pane>
                        </Tab.Content>
                </Col>
                </Row>
            </Tab.Container>
            </div>
            <div className="seconddiv">
   
    <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/rubik.png'} />
      <Card.Body>
        <Card.Title className="title">Rubiks Cube</Card.Title>
          <Card.Text className ="text">
          <ul>
          <li>Class 5-8</li>
          <li><b>16</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>1999</b> <s>3000</s></li>
          </ul>
          </Card.Text>
      </Card.Body>
      <Card.Footer>
        
        <Button variant="primary" size="lg" className="btn" active>ENROLL NOW</Button>
      </Card.Footer>
  </Card>
            </div>
        </div>
    </div>
    )

}





export default Rubik