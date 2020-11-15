import React from 'react';
import {CardDeck,Card,Button} from 'react-bootstrap';
import './carousel.css';

function Slider() {
return (
<>
<CardDeck className="Deck" >
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/python.png'} />
    <Card.Body>
      <Card.Title className="title">Python</Card.Title>
      <Card.Text className ="text">
        <ul className="desc">
          <li>Class 5-8</li>
          <li><b>32</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>3999</b> <s>5000</s></li>
        </ul>
      </Card.Text>
      <Card.Text className ="Price Te"></Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" size="sm" href="python" className="btn" active>LEARN MORE</Button>
    <Button variant="primary" size="sm" className="btn" active>ENROLL NOW</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/sudoku.jpg'} />
      <Card.Body>
        <Card.Title className="title">Sudoku</Card.Title>
          <Card.Text className="text">
          <ul className="desc">
          <li>Class 5-8</li>
          <li><b>16</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>1999</b> <s>3000</s></li>
          </ul>
          </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary" size="sm" href="sudoku" className="btn" active>LEARN MORE</Button>
      <Button variant="primary" size="sm" className="btn" active>ENROLL NOW</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/chess.png'} />
      <Card.Body>
        <Card.Title className="title">Chess</Card.Title>
          <Card.Text className="text">
          <ul className="desc">
          <li>Class 3-9</li>
          <li><b>50</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>7999</b> <s>9000</s></li>
          </ul>
          </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="sm" href="chess" className="btn" active>LEARN MORE</Button>
        <Button variant="primary" size="sm" className="btn" active>ENROLL NOW</Button>
      </Card.Footer>
  </Card>
</CardDeck>

<CardDeck className="Deck">
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/rubik.png'} />
      <Card.Body>
        <Card.Title className="title">Rubiks Cube</Card.Title>
          <Card.Text className ="text">
          <ul className="desc">
          <li>Class 5-8</li>
          <li><b>16</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>1999</b> <s>3000</s></li>
          </ul>
          </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="sm" href="rubik" className="btn" active>LEARN MORE</Button>
        <Button variant="primary" size="sm" className="btn" active>ENROLL NOW</Button>
      </Card.Footer>
  </Card>
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/webdev.png'} />
      <Card.Body>
        <Card.Title className="title">Web Development</Card.Title>
          <Card.Text className="text">
          <ul className="desc">
          <li>Class 5-8</li>
          <li><b>50</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>7999</b> <s>9000</s></li>
          </ul>
          </Card.Text>
      </Card.Body>
      <Card.Footer>
          <Button variant="primary" size="sm" href="webdev" className="btn" active>LEARN MORE</Button>
          <Button variant="primary" size="sm" className="btn" active>ENROLL NOW</Button>
      </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="courseimage2" variant="top" src={process.env.PUBLIC_URL + '/olympiad.png'} />
      <Card.Body>
        <Card.Title className="title">Maths Olympiad</Card.Title>
          <Card.Text className="text">
          <ul className="desc">
          <li>Class 5-8</li>
          <li><b>50</b> hours of live online training</li>
          <li>One Week Free Demo</li>
          <li>Rs.<b>7999</b> <s>9000</s></li>
          </ul>
          </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" size="sm" href="matholympiad" className="btn" active>LEARN MORE</Button>
      <Button variant="primary" size="sm" className="btn" active>ENROLL NOW</Button>
      </Card.Footer>
  </Card>
</CardDeck>
</>
)
}
export default Slider