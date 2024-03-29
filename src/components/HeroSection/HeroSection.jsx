import React from "react";
import "./styles.css";
import NavbarComp from "../Navbar/Navbar";
import Chat from "../../Chatbot/Chat";
const HeroPage = () => {
  return (
    <div>
      <NavbarComp />
      <div className="herosection">
        <div className="CoverPage">
          <div className="content">
            <span>Train insane or remain the same</span>
            <h2 className="orange">EMBRACE A NEW AGE OF FITNESS</h2>
            <h5>Want to build a good physique? Let us help you.</h5>
            <div className="button">
              <a href="/exercises">Getting Started</a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <Chat />
    </div>
  );
};

export default HeroPage;
