import"./MainImgStyle.css";

import React from 'react';
import IntroImg from "../assets/business-work-area.jpg";
// import { Link } from "react-router-dom";

const MainImg = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <h1>ADARSH RAJ SINHA</h1>
        <p></p>
        <div className="read">
      <span>I Am Very Passionate About Improving My Coding Skills & Developing Web Applications and having a knack for creating highly scalable and distributed systems.</span>
        </div>
      </div>
    </div>
  )
}

export default MainImg;
