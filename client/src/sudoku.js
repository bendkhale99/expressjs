import React from 'react'
import {Tab, Row,Col,ListGroup,Card,Button } from 'react-bootstrap';
import './sudoku.css';


function Sudoku(){
    return (
    <div className="Sudoku">
        <div className="start">
            <h1 className="heading">Sudoku</h1>
        </div>     
       
       <div className="sidebyside">
        <div className="firstdiv">
        <h3 className="subheader"><b>Course Overview</b> </h3>
        <p>Sudoku is a famous logic puzzle in which  player's objective is to fill 9*9 grid with 81 numbers
           Where each row , column  and 3*3 sub square has numbers between 1-9 uniquely . 
           Sudoku solving helps in improving development of logical brain , memory and concentration.
           Course will start with easy level sudoku puzzles where we will walk you through basic number elimination priciples , piegonhol principle.
           Course through midway  will escalate to complex and more intriguing puzzles ,where you will learn more complex 
           and memory expansion techniques. We will target extreme difficult puzzles towards end of the course, where puzzle solving
           will be artistic application of principles . After completion of course you will feel confident to compete at national level
         </p>
        </div>
        
        <div className="seconddiv">
            <h3 className="subheader"><b>Topics Covered</b></h3>
            <ul>
                <li>Introduction to Sudoku</li>
                <li>Eliminating down to signle number</li>
                <li>Introduction to WebSudoku.com</li>
                <li>Multidirectional Scanning Techniques</li>
                <li>Naked and Hidden Pairs</li>
                <li>X-Wings</li>
                <li>SwordFish</li>
                <li>Calcudoku</li>
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
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/sudoku.jpg'} />
      <Card.Body>
        <Card.Title className="title">Sudoku</Card.Title>
          <Card.Text className="text">
          <ul>
          <li>Class 5-8</li>
          <li><b>16</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>1999</b> <s>3000</s></li>
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





export default Sudoku