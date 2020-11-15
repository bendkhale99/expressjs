import React from 'react'
import { Figure } from 'react-bootstrap';
import './team.css';

function Team(){
    return (
    <div className="gold">
        <Figure className="teamimg">
        <Figure.Image   src={process.env.PUBLIC_URL + '/rahul.jpg'} 
        rounded />
        
        <Figure.Caption>
            Rahul Aggarwal 
        </Figure.Caption>
        <Figure.Caption>
        Software Engineer , Microsoft Corporation
        </Figure.Caption>
        <Figure.Caption>
        Computer Science Engineer , IIT Guwahati 
        </Figure.Caption>
        </Figure>

        <Figure className="teamimg">
        <Figure.Image   src={process.env.PUBLIC_URL + '/dev.jpg'} 
        rounded />
        
        <Figure.Caption>
            Devendra Bendkhale 
        </Figure.Caption>
        <Figure.Caption>
        Quant Researcher ,Plutus Research
        </Figure.Caption>
 
        <Figure.Caption>
        Computer Science Engineer  , IIT Guwahati
        </Figure.Caption>

        </Figure>

        <Figure className="teamimg">
        <Figure.Image   src={process.env.PUBLIC_URL + '/swapnil.jpg'} 
        rounded />
        
        <Figure.Caption>
            Swapnil Gupta 
        </Figure.Caption>
        <Figure.Caption>
        Data Scientist ,American Express
        </Figure.Caption>
 
        <Figure.Caption>
        Machine Learning Engineer  , IISC Bangalore
        </Figure.Caption>

        </Figure>

    </div>
    )

}





export default Team