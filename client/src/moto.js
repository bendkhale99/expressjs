import React from 'react';
import {Card, Button } from 'react-bootstrap';
import './moto.css';

function Moto() {
return(
    <Card className="moto">
  <Card.Header className="messageHeading">MandelBrot Academy</Card.Header>
  <Card.Body>
    <Card.Text className="messageBody1">
      A fun and interative way to learn 
    </Card.Text>

    <Card.Text className="messageBody2">
       Mathematics & Programming
    </Card.Text>
    
  </Card.Body>
</Card>
)
}

export default Moto
