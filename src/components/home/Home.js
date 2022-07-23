import { useState, useEffect } from "react";

import "./Home.css";
import img from "../../images/img22.jpg";
import Button from "../button/Button";
import { BsMouse } from "react-icons/bs";

const Home = () => {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    if (isSpinning) {
      const toggle = document.querySelector(".hover-show");
      toggle.classList.toggle("active");
    } else {
      const toggle = document.querySelector(".hover-show");
      toggle.classList = "hover-show";
    }
  }, [isSpinning]);

  useEffect(() => {
    const toggle = document.querySelector(".hover-show");
    toggle.classList = "hover-show active";
  }, []);

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show" onClick={() => setIsSpinning(!isSpinning)}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="img" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I'm a Software Engineer specializing in Web Development, Java, and
          Networking (Cisco CCNA certified). During my degree studies, I learned
          object-oriented, data structures and algorithms, relational databases,
          web development, user experience, and much more.
        </p>
        <br />
        <p>
          Today I'm a Junior web developer with knowledge in both frontend and
          backend technologies. Solutions provider loves challenges, is pleasant
          to work with, is a team player with a can-do approach, and is highly
          motivated to explore and learn the most modern technologies.
        </p>
      </h2>

      <Button />
    </div>
  );
};

export default Home;
