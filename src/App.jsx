import "./App.css";
import NavbarComp from "./components/Navbar/Navbar";
import HeroPage from "./components/HeroSection/HeroSection";
import Dashboard from "./components/User/Dashboard";
import { Router, Routes, Route } from "react-router";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      {/* <NavbarComp />
      <HeroPage /> */}
      {/* <Dashboard /> */}
      <AboutUs />
    </div>
  );
}

export default App;
