import React from "react";
import "./aboutus.css";
import NavbarComp from "../Navbar/Navbar";
import { aboutus } from "../../../config";

const AboutUs = () => {
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1>About Us</h1>
        {aboutus.descriptions.map((descriptions) => (
          <div className="aboutus">
            <div className="textContainer">
              <h1>{descriptions.title}</h1>
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
