import React from 'react';
import {Card} from 'react-bootstrap';
import './moto1.css';

function Moto1() 
{
    return(
        <Card className="moto1">
            <Card.Body>
                <Card.Text className="messageBody3">
                    Coding Classes for Kids - Introduce your child to the World of Coding
                </Card.Text>

                <Card.Text className="messageBody4">
                    Help them build websites, apps and games with EXCELLENT Teachers
                </Card.Text>
    
                <Card.Text className="messageBody5">
                    Coding improves Math & Logical skills
                </Card.Text>
            </Card.Body>
        </Card>
)
}
export default Moto1
