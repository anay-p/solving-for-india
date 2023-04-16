import React from "react";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import bicepcurls from "./BicepCurl.png";
import shoulderpress from "./ShoulderPress.png";
import pushups from "./pushup.png";
import squats from "./squats.png";
import "./exercise.css";
import NavbarComp from "../Navbar/Navbar";

const Exercise = () => {
  //const [exr, setExr] = useState("bicepCurls");

  return (
    <div>
      <NavbarComp />
      <div className="mainexer">
        <div className="excontainer">
          <div className="exercisecard">
            <a href="/bicepcurls">
              <img
                src="https://res.cloudinary.com/dhnkuonev/image/upload/v1681638721/biceps__1_-removebg-preview_v3vu2t.png"
                alt="bicepimage"
                width="250"
              ></img>
              <h1>Bicep Curls</h1>
            </a>
          </div>
          <div className="exercisecard">
            <a href="/squats">
              <img src={squats} alt="bicepimage" width="250"></img>
              <h1>Squats</h1>
            </a>
          </div>
          <div className="exercisecard">
            <a href="/pushups">
              <img src={pushups} alt="bicepimage" width="250"></img>
              <h1>Pushups</h1>
            </a>
          </div>
          <div className="exercisecard">
            <a href="/shoulderpress">
              <img
                src="https://res.cloudinary.com/dhnkuonev/image/upload/v1681638024/shoulderpress_exwzqu-removebg-preview_rimzrs.png"
                alt="bicepimage"
                width="250"
              ></img>
              <h1>Shoulder Press</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
