import React from "react";

import './About.css';
import Qualifications from '../qualifications/Qualifications';

const About = ({ scrolling, setScrolling }) => {
    return (
        <div id="about" className="container about-container">
            <div className="text-button">
                <span className="quali-text">My Qualifications</span>
                <button className="btn-scroll" onClick={() => setScrolling(!scrolling)}> {scrolling ? 'Stop Scrolling' : 'Resume Scrolling'} </button>
            </div>
            <Qualifications scrolling={scrolling} />
        </div>
    )
}

export default About