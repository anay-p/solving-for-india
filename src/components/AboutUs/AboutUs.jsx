import React from "react";
import "./AboutUs.css";
import NavbarComp from "../Navbar/Navbar";

const AboutUs = () => {
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <div className="aboutus">
          <div className="textContainer">
            At FitHub, we believe that technology can help us achieve our
            fitness goals faster and more efficiently.Our machine learning
            technology also allows us to provide you with customized workout
            plans that are designed to help you achieve your specific goals,
            whether you're looking to lose weight, build muscle, or improve your
            overall fitness. At FitHub, we believe that machine learning is the
            future of fitness, and we're committed to staying at the forefront
            of this technology. Come visit us today and experience the power of
            machine learning for yourself!
          </div>
          <div className="imageContainer">
            <img
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1680769940/aboutus_lcmia0.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
