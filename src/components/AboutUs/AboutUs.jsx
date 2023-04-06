import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="aboutus">
        <div className="textContainer">
          At FitHub, we believe that technology can help us achieve our fitness
          goals faster and more efficiently. That's why we use machine learning
          to track your exercise and provide you with personalized guidance and
          feedback. Our machine learning algorithms analyze data from your
          workouts, including your heart rate, calories burned, and the types of
          exercises you perform. This data is then used to create a personalized
          fitness plan that is tailored to your specific needs and goals. With
          our machine learning technology, we can track your progress over time
          and provide you with real-time feedback on your performance. This
          means that you can adjust your workouts on the fly, based on your
          body's response to different exercises and activities. Our machine
          learning technology also allows us to provide you with customized
          workout plans that are designed to help you achieve your specific
          goals, whether you're looking to lose weight, build muscle, or improve
          your overall fitness. At FitHub, we believe that machine learning is
          the future of fitness, and we're committed to staying at the forefront
          of this technology. Come visit us today and experience the power of
          machine learning for yourself!
        </div>
        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/dhnkuonev/image/upload/v1680769940/aboutus_lcmia0.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
