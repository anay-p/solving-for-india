import "./App.css";
import NavbarComp from "./components/Navbar/Navbar";
import HeroPage from "./components/HeroSection/HeroSection";
import Dashboard from "./components/User/Dashboard";
import { Router, Routes, Route,BrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Exercise from "./components/ExercisePage/Exercise";
// import Counter from "./components/mediapipe/Counter";
import Bicepcurl from "./components/mediapipe/Bicepcurl";
import PushUp from "./components/mediapipe/PushUp";
import Squat from "./components/mediapipe/Squat";
import Shoulderpress from "./components/mediapipe/Shoulderpress";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Routes>
    <Route path='/' Component={HeroPage} exact/>
      
      <Route path='/aboutus' Component={AboutUs} exact/>
      {/* <Route path='/' Component={Footer} exact/> */}
      <Route path='/exercises' Component={Exercise} exact/>
      <Route path='/bicepcurls' element= {<Bicepcurl exercise={"bicepCurls"} />} />
      <Route path='/pushups' element= {<PushUp exercise={"pushups"} />} />
      <Route path='/squats' element= {<Squat exercise={"squats"} />} />
      <Route path='/shoulderpress' element= {<Shoulderpress exercise={"shoulderpress"} />} />
      </Routes>
      {/* <Dashboard /> */}
    </div>
    
    </BrowserRouter>
  );
}

export default App;
