import React from "react";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import bicepcurls from "./bicepcurls.png";
import shoulderpress from "./crunches.png";
import pushups from "./pushup.png";
import squats from "./squats.png";
import "./exercise.css"
import NavbarComp from "../Navbar/Navbar";


const Exercise = () => {
  //const [exr, setExr] = useState("bicepCurls");

  return (
    <div >
      <NavbarComp/>
      <div className="mainexer">
      <div className="excontainer">
        <a href="/bicepcurls">
          <img src={bicepcurls} alt="bicepimage" width="250"></img>
          <h1>Bicep Curls</h1>
        </a>
        <a href="/squats">
          <img src={squats} alt="bicepimage" width="250"></img>
          <h1>Squats</h1>
        </a>
        <a href="/pushups">
          <img src={pushups} alt="bicepimage" width="250"></img>
          <h1>Pushups</h1>
        </a>
        <a href="/shoulderpress">
          <img src={shoulderpress} alt="bicepimage" width="250"></img>
          <h1>Shoulder Press</h1>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Exercise;