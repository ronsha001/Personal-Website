import React from "react";

import './About.css';
import Qualifications from '../qualifications/Qualifications';

const About = () => {
    return (
        <div id="about" className="container about-container">
            <div className="text-button">
                <span className="quali-text">My Qualifications</span>
            </div>
            <Qualifications />
        </div>
    )
}

export default About