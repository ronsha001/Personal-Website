import React, { useEffect } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiBriefcase } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home" title="Home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about" title="Qualifications">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members" title={"Projects"}>
        <TiBriefcase className="icon" />
      </a>
      <a href="#contact" title={"Contact"}>
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer" title={"Footer"}>
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
