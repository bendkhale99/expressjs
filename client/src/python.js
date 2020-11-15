import React from 'react'
import {Tab, Row,Col,ListGroup,Card,Button } from 'react-bootstrap';
import './python.css';


function Python(){
    return (
    <div className="Python">
        <div className="start">
            <h1 className="heading">Python</h1>
        </div>     
       
       <div className="sidebyside">
        <div className="firstdiv">
        <h3 className="subheader"><b>Course Overview</b> </h3>
        <p>Python is high-level programming language , which has multi purpose usage . 
            By learning python you will understand , how we can give instruction to computer to do 
            simple and complex tasks . We will walk you over basics of python , develop your
            understanding  and steeply escalate level of complexity where you would be doing projects 
            of your own , developing games , learning algorithms . At end of the course you will feel 
            capable of diving deep into world of logic and build creative applications. 
        </p>
        </div>
        
        <div className="seconddiv">
            <h3 className="subheader"><b>Topics Covered</b></h3>
            <ul>
                <li>Introduction to Programming</li>
                <li>Familiarity with IDLE Python framework</li>
                <li>Turtle Gui Library</li>
                <li>Variables,Conditions,Loops</li>
                <li>Arrays and Functions</li>
                <li>Fractals using recursion</li>
                <li>Intro to Hackerrank's Python</li>
                <li>Basics of Object oriented Programming</li>
                <li>Physics simulation</li>
                <li>Scientific Calculator</li>
                <li>Single Player Game</li>
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
                <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/python.png'} />
                <Card.Body>
                <Card.Title className="title">Python</Card.Title>
                <Card.Text className ="text">
                    <ul>
                        <li>Class 5-8</li>
                        <li><b>32</b> hours of live online training</li>
                        <li>One Week Free Demo</li>
                        <li>Rs.<b>3999</b> <s>5000</s></li>
                    </ul>
                </Card.Text>
                
                <Card.Text className ="Price Te"></Card.Text>
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





export default Python