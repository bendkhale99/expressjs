import React , {Component} from 'react'
import { } from 'react-bootstrap';
import './speciality.css';

class Speciality extends Component{

        render(){
            return (
                <>
                <h4 className="speciality">Why MandelBrot? </h4>
                <ul>
                <li className="speciality-text">Personalised Curriculum</li>
                <li className="speciality-text">Flexible Time</li>
                <li className="speciality-text">Regular Updates</li>
                <li className="speciality-text">Learn through Cartoons</li>
                <li className="speciality-text">Group Project</li>
                </ul>
                </>  
            )
        }
}

export default Speciality