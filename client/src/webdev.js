import React from 'react'
import {Tab, Row,Col,ListGroup,Card,Button } from 'react-bootstrap';
import './webdev.css';


function Webdev(){
    return (
    <div className="WebDev">
        <div className="start">
            <h1 className="heading">Web Development</h1>
        </div>     
       
       <div className="sidebyside">
        <div className="firstdiv">
        <h3 className="subheader"><b>Course Overview</b> </h3>
        <p> Web development is growing field in 21st century . 
            With everything we do shifting online day-by-day , 
            the people who develop websites are in great demand.
            We will be covering basic to advanced concepts of web development, 
            design and deployment throughout the course . Course will start with HTML which
            allows you to build with static web pages . Through the course we will escalate to
            CSS, Javascrips , various frameworks ,backend , web hosting etc. After the course you will
            be capable to design and develop intermediate level website which occurs in professional industry.
         </p>
        </div>
        
        <div className="seconddiv">
            <h3 className="subheader"><b>Topics Covered</b></h3>
            <ul>
                <li>Introduction to Web Developent</li>
                <li>Installation of <b>Visual Studio</b></li>
                <li>Static web pages through <b>HTML</b></li>
                <li>Beautification through <b>CSS</b></li>
                <li>Dynamic websites through <b>Javascript</b></li>
                <li>Javascript Libraries <b>Jquery, React</b></li>
                <li>Backend with <b>NodeJs , Express Js</b></li>
                <li>Intro to Databases with <b>Mongo DB</b></li>
                <li>Building a full-fledged website</li>
                <li>Deploying/Hosting your website</li>
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
            <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/webdev.png'} />
      <Card.Body>
        <Card.Title className="title">Web Development</Card.Title>
          <Card.Text className="text">
          <ul>
          <li>Class 5-8</li>
          <li><b>50</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>7999</b> <s>9000</s></li>
          </ul>
          </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" size="lg"  href="python" active>ENROLL NOW</Button>
    </Card.Footer>
  </Card>
            </div>
        </div>
    </div>
    )

}





export default Webdev