import React from 'react'
import {Tab, Row,Col,ListGroup,Card,Button } from 'react-bootstrap';
import './matholympiad.css';


function Matholympiad(){
    return (
    <div className="Matholympiad">
        <div className="start">
            <h1 className="heading">MathOlympiad</h1>
        </div>     
       
       <div className="sidebyside">
        <div className="firstdiv">
        <h3 className="subheader"><b>Course Overview</b> </h3>
        <p>
            Math olympiad is internationally held competition related to mathematics . From India
            to appear in International olympiad students have to go through 
            RMO (Regional Mathematics Olympiad)  and INMO (Indian National Mathematics Olympiad). 
            We train students for these exams . Through the course we start from the basics of maths , 
            defining theory and solving 3 leveled difficulty problems of a topic. 
            We cover in depth analysis of topics like number theory , combinatiorics, algebra ,
            geometry which are  beyond scope of school syllabus . Students passionate about maths
            and willing to work hard are ideal for this course
         </p>
        </div>
        
        <div className="seconddiv">
            <h3 className="subheader"><b>Topics Covered</b></h3>
            <ul>
                <li><b>Number Theory :</b> Euclid's Algorithm , Modular Arithmetic, Diophantine Equations</li>
                <li><b>Algebra       :</b>Linear Equations/Inequations , Quadratic Equations , Location of roots </li>
                <li><b>Combinatorics :</b>Permutation and Combination,Set Theory,Probability,Graph Theory</li>
                <li><b>Geometry      :</b>Triangles and Circles,Mensuration,Lines and Curves</li>
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
            <Card.Img className="courseimage2" variant="top" src={process.env.PUBLIC_URL + '/olympiad.png'} />
      <Card.Body>
        <Card.Title className="title">Maths Olympiad</Card.Title>
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
        
        <Button variant="primary" size="lg" className="btn" active>ENROLL NOW</Button>
      </Card.Footer>
  </Card>
            </div>
        </div>
    </div>
    )

}





export default Matholympiad