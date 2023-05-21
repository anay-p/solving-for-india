import React from "react";
import "./aboutus.css";
import NavbarComp from "../Navbar/Navbar";
import { aboutus } from "../../../config";

const AboutUs = () => {
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1 style={{ color: "#f6740a" }}>About Us</h1>
        {aboutus.descriptions.map((descriptions) => (
          <div className="aboutus">
            <div className="textContainer">
              <h1 style={{ color: "#ea8537" }}>{descriptions.title}</h1>
              {descriptions.desc}
            </div>
            <div className="imageContainer">
              <img src={descriptions.src} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
