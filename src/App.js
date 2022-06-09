import React, { useState } from "react";

import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [scrolling, setScrolling] = useState(true);
  
  const stopScrolling = () =>  {
    setScrolling(false)
  }

  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      
      <Header />
      <Navbar stopScrolling={stopScrolling} />
      <Home stopScrolling={stopScrolling} />
      <About scrolling={scrolling} setScrolling={setScrolling} />
      <Projects />
      <Contact />
      <Footer stopScrolling={stopScrolling} />
    </>
  );
}

export default App;
