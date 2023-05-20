import React, { useState, Component } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,createUserDocument } from "../../firebase";
// import './log.css';
// import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import "./Sign.css";
const Signup = () => {
  const navigate = useNavigate();
  const [name,setName] =useState("");
  const [age,setAge] =useState();
  const [height,setHeight] =useState();
  const [weight,setWeight] =useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let userx= {Name:name,Email:email,Age:age,Height:height,Weight:weight,ID:user.uid};
       createUserDocument(userx);
        
        
        navigate(`dashboard/${userx.Email}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="App1">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/login"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formTitle">
          <NavLink
            exact
            to="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formCenter">
          <form onSubmit={onSubmit} className="formFields">
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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
                  onChange={(e) => setAge(e.target.value)}
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
                  onChange={(e) => setHeight(e.target.value)}
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
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            <div className="formField">
              <label className="formFieldCheckboxLabel">
                <input
                  className="formFieldCheckbox"
                  type="checkbox"
                  name="hasAgreed"
                  required
                />{" "}
                I agree all statements in{" "}
                <a href="null" className="formFieldTermsLink">
                  terms of service
                </a>
              </label>
            </div>

            <div className="formField">
              <button className="formFieldButton">Sign Up</button>{" "}
              <Link to="/login" className="formFieldLink">
                I'm already member
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;