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
        <Container className="containernav">
          <Nav className="navlinks">
            <Navbar.Brand className="linkText" href="/">
              <img
                src="https://res.cloudinary.com/dhnkuonev/image/upload/v1680687009/Draft2-removebg-preview_mogobu.png"
                alt=""
                className="heroicon"
              />
            </Navbar.Brand>
            <Nav.Link className="linkText" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="linkText" href="/aboutus">
              About
            </Nav.Link>
            <Nav.Link className="linkText" href="/exercises">
              Workouts
            </Nav.Link>
            <Nav.Link href="/signup">
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
