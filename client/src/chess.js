import React from 'react'
import {Tab, Row,Col,ListGroup,Card,Button } from 'react-bootstrap';
import './chess.css';


function Chess(){
    return (
    <div className="Chess">
        <div className="start">
            <h1 className="heading">Chess</h1>
        </div>     
       
       <div className="sidebyside">
        <div className="firstdiv">
        <h3 className="subheader"><b>Course Overview</b> </h3>
        <p>Chess is ancient indian 2 player board game where both player's objective is to checkmate opponent's king.
            Playing chess improves logical thinking of brain and improves concentration. We will cover basics of chess
            starting from moves of different pieces of chess, their relative strength . Opening Strategies , Middlegame tactics,
            End Game techniques. After the course , you will be confident to participate in chess competitions and perform well. 
         </p>
        </div>
        
        <div className="seconddiv">
            <h3 className="subheader"><b>Topics Covered</b></h3>
            <ul>
                <li>Introduction to Chess</li>
                <li>Movement of pieces, mate, stalemate</li>
                <li>Special Moves : Enpassant , Castling</li>
                <li>Intro to chess.com</li>
                <li>Standard Openings : Sicilian , French, Italian etc.</li>
                <li>Middle Games Techniques : Fork , Pin , Skewer , Backrank Mate</li>
                <li>End Game Techniques</li>
                <li>Mate in 1,2,3 Puzzles</li>
                <li>K-Q ,K-R ,2 Rooks, 2 Bishop , Night-Bishop mates</li>
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
    <Card.Img className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/chess.png'} />
      <Card.Body>
        <Card.Title className="title">Chess</Card.Title>
          <Card.Text className="text">
          <ul>
          <li>Class 3-9</li>
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





export default Chess