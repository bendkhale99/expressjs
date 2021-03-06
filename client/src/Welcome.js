import React , {Component} from 'react'
import {Button } from 'react-bootstrap';
import './Welcome.css';

class Welcome extends Component{

        render(){
            return (
                <>
                <h3 className="welcome">Brought to you by experts from </h3>
                <div className="sidebyside">
                    <Button variant="primary" className="brand">IIT</Button>{' '}
                    <Button variant="secondary" className="brand">Flipkart</Button>{' '}
                    <Button variant="success" className="brand">Microsoft</Button>{' '}
                    <Button variant="warning" className="brand">IISC</Button>{' '}
                    <Button variant="danger" className="brand">Adobe</Button>
                </div>
 
</>  
            )
        }
}

export default Welcome