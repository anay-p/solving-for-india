import React, {useState,Component} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { NavLink, useNavigate,Link } from 'react-router-dom'
import './Sign.css'
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }

    return(
        <div className="App1">
        <div className="appAside"/>
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
                to="/login"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}


            </div>
        <div className="formCenter">
        <form onSubmit={onLogin} className="formFields">
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>



          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/signup" className="formFieldLink">
              I need to register
            </Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    )
}

export default SignIn