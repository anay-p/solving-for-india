import React from "react";
import "./aboutus.css";
import NavbarComp from "../Navbar/Navbar";
import { aboutus } from "../../../config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            color: "#f6740a",
            textDecoration: "underline",
          }}
        >
          Our Team
        </h1>
        <div className="ourTeam">
          {aboutus.teamMembers.map((teamMembers) => (
            <div className="profileCard" key={teamMembers.id}>
              <img src={teamMembers.imgSrc} alt={teamMembers.name} />
              <h4 style={{ marginTop: "10px" }}>{teamMembers.name}</h4>
              {teamMembers.links.map((link, index) => (
                <div className="links" key={index}>
                  <a href={link.github}>
                    <FaGithub className="icon" />
                  </a>
                  <a href={link.linkedIn}>
                    <FaLinkedin className="icon" />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
