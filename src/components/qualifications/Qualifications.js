import React, { useState, useEffect, useRef } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const container = useRef(null);

  return (
    <div>
      <div className="qualifications-container" ref={container}>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react.js</h1>
        </div>
        <div className="qualification">
          <div className="content node"></div>
          <h1>node.js</h1>
        </div>
        <div className="qualification">
          <div className="content mongoDB"></div>
          <h1>mongoDB</h1>
        </div>
        <div className="qualification">
          <div className="content sql"></div>
          <h1>sql</h1>
        </div>
        <div className="qualification">
          <div className="content npm"></div>
          <h1>NPM</h1>
        </div>
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content php"></div>
          <h1>php</h1>
        </div>
        <div className="qualification">
          <div className="content python"></div>
          <h1>python</h1>
        </div>
        <div className="qualification">
          <div className="content java"></div>
          <h1>java</h1>
        </div>
        <div className="qualification">
          <div className="content cisco" ></div>
          <h1>Network</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
