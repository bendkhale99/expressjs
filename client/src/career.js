import React from 'react'
import './career.css';
import { Accordion,Card } from 'react-bootstrap';

function JobDesc(){
    return(
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
      Python Facutly
    </Accordion.Toggle>
    <Accordion.Collapse  eventKey="0">
    <ul>
        <li>0-3 Years of previous experience</li>
        <li>Bachelors/Masters degree in Science/Engineering</li>
        <li>Sound knowledge python basic syntax and procedural , object-oriented programming concepts</li>
        <li>Familiarity with Data Structures and algorithms</li>
        <li>Knowledge of libraries such as Pandas , Tktinter , Sklearn , MatPlotLib will be considered as a plus</li>
        <li>Ability to communicate complex programming concepts in a simple manner</li>
    </ul>   
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
      Web Development Faculty
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
    <ul>
        <li>0-3 Years of previous experience</li>
        <li>Bachelors/Masters  degree in Science/Engineering</li>
        <li>Sound knowledge of HTML,CSS and Javascript</li>
        <li>Familiarity with one of the popular FrameWorks like Angular, React , View</li>
        <li>Ability to communicate complex programming concepts in a simple manner</li>
    </ul> 
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
      Sudoku/Rubik's Cube Faculty
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
    <ul>
        <li>0-1 Years of previous teaching experience</li>
        <li>Strong inclination in Puzzle solving</li>
        <li>Familiarity is rubik's cube of sudoku solving atleast at intermediate level</li>
        <li>Ability to communicate complex  concepts in a simple manner</li>
    </ul> 
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
      Chess Faculty
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
    <ul>
        <li>0-1 Years of previous teaching experience</li>
        <li>Chess rating of 1700+</li>
        <li>Ability to communicate complex  concepts in a simple manner</li>
    </ul> 
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
      Maths Olympiad Faculty
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
    <ul>
        <li>0-1 Years of previous teaching experience</li>
        <li>Passion towards problem solving in Maths</li>
        <li>Bachelors/Masters degree in Science/Engineering</li>
        <li>Ability to communicate complex  concepts in a simple manner</li>
    </ul> 
    </Accordion.Collapse>
  </Card>

</Accordion>

    )
}

function Careers(){
    return (
    <div className="About">
        <div className="start">
            <h1 className="heading">Careers</h1>
        </div>
        <h6 className="text">
            Programming experts who have passion to teach and share their expertise to students are welcomed at MandleBrot Academy.
            We have following openings as listed below.   
        </h6 >
        
        <JobDesc/>

        <p className="mailresume"> Interested candidates can send resume at hr@mandelbrot-academy.com</p>

      
        
    </div>
    )

}





export default Careers