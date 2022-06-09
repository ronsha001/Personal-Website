import React, { useState, useEffect, useRef } from "react";
import "./Qualifications.css";


const Qualifications = ({ scrolling }) => {
    
    const container = useRef(null);
    const myRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

    
    const speed = 1;
    const CONTAINER_WIDTH = 2351
    var goingRight = true, goingLeft = false
    useEffect(() => {
        if(scrolling){
            const interval = setInterval(() => {    
                if (goingRight && container.current.scrollLeft < CONTAINER_WIDTH) {
                    container.current.scrollLeft += speed
                } else {
                    goingRight = false
                    goingLeft = true
                }

                if (goingLeft && container.current.scrollLeft > 0) {
                    container.current.scrollLeft -= speed
                } else {
                    goingLeft = false
                    goingRight = true
                }
            }, 10)
            return () => clearInterval(interval);
        }
        
    }, [scrolling])



    return (
        <div>
            
            <div className="qualifications-container" ref={container}>
                <div className="qualification">
                    <div className="content html" ref={myRefs[0]}></div>
                    <h1>html</h1>
                </div>
                <div className="qualification">
                    <div className="content css" ref={myRefs[1]}></div>
                    <h1>css</h1>
                </div>
                <div className="qualification">
                    <div className="content javascript" ref={myRefs[2]}></div>
                    <h1>javascript</h1>
                </div>
                <div className="qualification">
                    <div className="content react" ref={myRefs[3]}></div>
                    <h1>react</h1>
                </div>
                <div className="qualification">
                    <div className="content node" ref={myRefs[4]}></div>
                    <h1>node</h1>
                </div>
                <div className="qualification">
                    <div className="content php" ref={myRefs[5]}></div>
                    <h1>php</h1>
                </div>
                <div className="qualification">
                    <div className="content python" ref={myRefs[6]}></div>
                    <h1>python</h1>
                </div>
                <div className="qualification">
                    <div className="content java" ref={myRefs[7]}></div>
                    <h1>java</h1>
                </div>
                <div className="qualification">
                    <div className="content mongoDB" ref={myRefs[8]}></div>
                    <h1>mongoDB</h1>
                </div>
                <div className="qualification">
                    <div className="content sql" ref={myRefs[9]}></div>
                    <h1>sql</h1>
                </div>
            </div>
        </div>
    )
}

export default Qualifications