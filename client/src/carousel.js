import React from 'react';
import {CardDeck,Card,Button} from 'react-bootstrap';
import './carousel.css';

function Slider() {
return (
<>
<CardDeck className="Deck">
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/python.png'} />
    <Card.Body>
      <Card.Title className="title">Python</Card.Title>
      <Card.Text className ="text">
        Techniques/Sutras to solve mathematical arithmetics in easy and faster way.
        It consists of 16 Sutras (Formulae) and 13 sub-sutras (Sub Formulae) which can be used for
        problems involved in arithmetic, algebra, geometry, calculus, conics.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" size="lg" active>Book Course</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/sudoku.jpg'} />
      <Card.Body>
        <Card.Title className="title">Sudoku</Card.Title>
          <Card.Text className="text">
            Sudoku is a logic puzzle. Any person who does not even know numbers but can think 
            logically can do it.  
            There are 9 types of intelligence and logic is just one of them. 
            You become logically intelligent after rigourous training of sudoku.
          </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary" size="lg" active>Book Course</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/chess.png'} />
      <Card.Body>
        <Card.Title className="title">Chess</Card.Title>
          <Card.Text className="text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="lg" active>Book Course</Button>
      </Card.Footer>
  </Card>
</CardDeck>

<CardDeck className="Deck">
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/rubik.png'} />
      <Card.Body>
        <Card.Title className="title">Rubiks Cube</Card.Title>
          <Card.Text className ="text">
            Techniques/Sutras to solve mathematical arithmetics in easy and faster way.
            It consists of 16 Sutras (Formulae) and 13 sub-sutras (Sub Formulae) which can be used for
            problems involved in arithmetic, algebra, geometry, calculus, conics.
          </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="lg" active>Book Course</Button>
      </Card.Footer>
  </Card>
  <Card>
    <Card.Img  className="courseimage" variant="top" src={process.env.PUBLIC_URL + '/webdev.png'} />
      <Card.Body>
        <Card.Title className="title">Web Development</Card.Title>
          <Card.Text className="text">
            Sudoku is a logic puzzle. Any person who does not even know numbers but can think 
            logically can do it.  
            There are 9 types of intelligence and logic is just one of them. 
            You become logically intelligent after rigourous training of sudoku.
          </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" size="lg" active>Book Course</Button>
      </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="courseimage2" variant="top" src={process.env.PUBLIC_URL + '/olympiad.png'} />
      <Card.Body>
        <Card.Title className="title">Maths Olympiad</Card.Title>
          <Card.Text className="text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="lg" active>Book Course</Button>
      </Card.Footer>
  </Card>
</CardDeck>
</>
)
}
export default Slider