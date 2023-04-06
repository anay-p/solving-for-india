import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
const NavbarComp = () => {
  return (
    <div className="Navmain">
      <Navbar bg="dark" variant="dark">
        <Container className="container">
          <Navbar.Brand className="linkText" href="#home">
            <img
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1680687009/Draft2-removebg-preview_mogobu.png"
              alt=""
              className="heroicon"
            />
          </Navbar.Brand>
          <Nav className="navlinks">
            <Nav.Link className="linkText" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="linkText" href="#aboutus">
              About Us
            </Nav.Link>
            <Nav.Link className="linkText" href="#exercises">
              Exercises
            </Nav.Link>
            <Nav.Link href="Sign Up">
              <Button className="button3" variant="dark">
                Sign Up
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
