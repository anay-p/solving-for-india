import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";

const NavbarComp = () => {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
      }
    });
  }, []);

  if (!signedIn) {
    return (
      <div className="Navmain">
        <Navbar bg="dark" variant="dark">
          <Container className="containernav">
            <Nav className="navlinks">
              <Navbar.Brand className="linkText" href="/">
                <img
                  src="https://res.cloudinary.com/dhnkuonev/image/upload/v1684901314/Draft6_bqcn2p.png"
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
              <Nav.Link className="linkText" href="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link href="/sign-up">
                <Button className="button3" variant="dark">
                  Sign Up
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div className="Navmain">
        <Navbar bg="dark" variant="dark">
          <Container className="containernav">
            <Nav className="navlinks">
              <Navbar.Brand className="linkText" href="/">
                <img
                  src="https://res.cloudinary.com/dhnkuonev/image/upload/v1684901314/Draft6_bqcn2p.png"
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
              <Nav.Link className="linkText" href="/dashboard">
                Dashboard
              </Nav.Link>
              <Button
                className="button3"
                variant="dark"
                onClick={() => {
                  signOut(auth);
                  navigate("/log-in");
                }}
              >
                Log Out
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
};

export default NavbarComp;
