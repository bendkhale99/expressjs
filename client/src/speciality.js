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
                <li className="speciality-text">Interactive Learning</li>
                <li className="speciality-text">Learning from industry experts</li>
                <li className="speciality-text">Hands on Practice sessions</li>
                <li className="speciality-text">Group Project</li>
                </ul>
                </>  
            )
        }
}

export default Speciality