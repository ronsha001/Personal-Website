import React, { useEffect } from 'react';
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiBriefcase } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar({ stopScrolling }) {

    

    return (
        <div className="navigation">
            <a href="#home" title="Home" onClick={stopScrolling}>
                <AiOutlineHome className="icon active-nav" />
            </a>
            <a href="#about" title="Qualifications" onClick={stopScrolling}>
                <AiOutlineUser className="icon" />
            </a>
            <a href="#members" title={"Projects"} onClick={stopScrolling}>
                <TiBriefcase className="icon" />
            </a>
            <a href="#contact" title={"Contact"} onClick={stopScrolling}>
                <BiMessageRoundedDots className="icon" />
            </a>
            <a href="#footer" title={"Footer"} onClick={stopScrolling}>
                <BsArrowDownCircle className="icon" />
            </a>
        </div>
    )
}

export default Navbar