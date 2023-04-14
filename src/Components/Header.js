import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Lanuch My App</span>With Confidence And Creativity
        </h1>
        <h4 className="details">
          Stet tempor consetetur tempor consetetur nonumy lorem sit diam eos
          takimata, no erat diam ut eirmod erat sed dolor, dolore.
        </h4>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default Header;
