import React, { useState, Component } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
// import './log.css';
// import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import "./Userdata.css";
const UserData = () => {
  const navigate = useNavigate();

  return (
    <div className="App1">
      <div className="appForm">
        <div className="formTitle">
          <NavLink
            exact
            to="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Let's know you more!!
          </NavLink>
        </div>
        <div className="formCenter">
          <form className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="Enter your full name"
                name="name"
              />
            </div>
            <div className="formgroup">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="formFieldInput"
                  placeholder="Enter your age"
                  name="age"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Height(in cms)
                </label>
                <input
                  type="number"
                  id="height"
                  className="formFieldInput"
                  placeholder="Enter your height"
                  name="height"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Weight(in kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  className="formFieldInput"
                  placeholder="Enter your weight"
                  name="weight"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Neck Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="neck"
                  className="formFieldInput"
                  placeholder="Enter your neck circumference"
                  name="neck"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Chest Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="chest"
                  className="formFieldInput"
                  placeholder="Enter your chest circumference"
                  name="chest"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Abdomen Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="abdomen"
                  className="formFieldInput"
                  placeholder="Enter your abdomen circumference"
                  name="abdomen"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Hip Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="hip"
                  className="formFieldInput"
                  placeholder="Enter your hip circumference"
                  name="hip"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Thigh Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="thigh"
                  className="formFieldInput"
                  placeholder="Enter your thigh circumference"
                  name="thigh"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Knee Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="knee"
                  className="formFieldInput"
                  placeholder="Enter your knee circumference"
                  name="knee"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Ankle Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="ankle"
                  className="formFieldInput"
                  placeholder="Enter your ankle circumference"
                  name="ankle"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Biceps Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="biceps"
                  className="formFieldInput"
                  placeholder="Enter your biceps circumference"
                  name="biceps"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Forearm Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="forearm"
                  className="formFieldInput"
                  placeholder="Enter your forearm circumference"
                  name="forearm"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Wrist Circumference(in cms)
                </label>
                <input
                  type="number"
                  id="wrist"
                  className="formFieldInput"
                  placeholder="Enter your wrist circumference"
                  name="wrist"
                />
              </div>
            </div>
            <div className="formField">
              <button className="formFieldButton">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="appAside" />
    </div>
  );
};

export default UserData;
