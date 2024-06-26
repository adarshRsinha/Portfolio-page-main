import "./FooterStyle.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                +91-9425032541 </h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                <a href="mailto:sinhaadarsh929@gmail.com?body=My custom mail body">sinhaadarsh929@gmail.com</a></h4>
                <div className="location">
                    <h4><FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/> </h4>
                    <div>
                        <h4>Indore, India</h4>
                    </div>
                </div>
                
                </div>
            </div>
            <div className="right">
            <h4>Adarsh's Portfolio</h4>
            <p>Thank You For Visiting My Personal Portfolio Website. Connect With Me Over Socials. I enjoy discussing the new projects and design challenges.</p>
            <div className="social-media">
            {/* <a><FaFacebook size={20} style={{color:"#fff", marginRight: "2rem" }}/></a> */}
            <a href="https://www.instagram.com/adarsh_2142"><FaInstagram size={20} style={{color:"#fff", marginRight: "2rem" }}/></a>
            <a href="https://www.linkedin.com/in/adarsh-raj-sinha-88677b224"><FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem" }}/></a>
            <a href="https://github.com/adarshRsinha"><FaGithub size={20} style={{color:"#fff", marginRight: "2rem" }}/></a>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
