import React from 'react'
import './about.css';
import Team from './team'

function About(){
    return (
    <div className="About">
        <div className="start">
            <h1 className="heading">About MandelBrot Academy</h1>
            <h5 className="subheading">On mission of developing world-class programmers</h5>
        </div>
        <h6 className="text">
            We are IIT Graduates  working in tech/finance companies  microsoft, american express , flipkart , myntra 
            etc. Passionate to develop programming and logical thinking culture among children.
            We believe our brain has immense capabilty in reasoning and logical thinking and if triggered 
            at right age could do wonders. We are on mission on guiding students to follow 
            career path in programming , mathematics and logical sports.
        </h6 >
        <div className="start">
            <h1 className="heading">Our Team</h1> 
        </div>
        <Team/>

      
        
    </div>
    )

}





export default About