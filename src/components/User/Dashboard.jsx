import { React, useEffect, useState } from "react";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import Button from "react-bootstrap/Button";

import { Chart2 } from "./Chart2";
import { Chartx } from "./Chart";
import NavbarComp from "../Navbar/Navbar";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Calories Burn", "Protein", "Carbs"],
  datasets: [
    {
      label: "Percentage",
      data: [33.5, 23.02, 11.24],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const Dashboard = () => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then((docSnap) => {
          const userx = docSnap.data();
          setName(userx["name"]);
          setAge(userx["age"]);
          setWeight(userx["weight"]);
          setHeight(userx["height"]);
        });
        const unsub = onSnapshot(docRef, (docSnap) => {
          const bodyFat = docSnap.get("body_fat");
          if (bodyFat) {
            setBodyFat(bodyFat);
            unsub();
          }
        });
      } else {
        navigate("/log-in");
      }
    });
  }, []);

  const bodyFatLabel = () => {
    if (bodyFat) {
      return `Body Fat: ${parseFloat(bodyFat).toFixed(2)}%`;
    } else {
      return <Link to="/additional-info">Body Fat: -</Link>;
    }
  };

  if (!height) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
        <div className="loading">
          <div></div>
          <div></div>
        </div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <>
        <NavbarComp />
        <div className="sectioncontainer">
          <h1
            style={{
              textDecoration: "underline",
              color: "#f6740a",
            }}
          >
            Dashboard
          </h1>
          <div class="main">
            <div
              className="sidebar"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  top: "0",
                  color: "#f6740a",
                  textDecoration: "underline",
                }}
              >
                Profile
              </h1>
              <img
                src="https://res.cloudinary.com/dhnkuonev/image/upload/v1679906502/11602236_21004063_c6g3he-removebg-preview_ntr0cu.png"
                alt=""
                style={{
                  border: "1.5px solid #f6740a",
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                }}
              />
              <h2>{name}</h2>
              <h3>Age: {age}</h3>
              <h3>Weight: {weight} kg</h3>
              <h3>Height: {height} cm</h3>
              <h3>{bodyFatLabel()}</h3>
            </div>
            <div className="dashboard">
              <div className="Tracker">
                <Card border="primary" style={{ width: "auto" }}>
                  <Card.Header
                    style={{
                      fontSize: "20px",
                      paddingTop: "5px",
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    Bicep Curls
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Chart2 uid={uid} exercise="bicep_curls" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="Tracker">
                <Card border="primary" style={{ width: "auto" }}>
                  <Card.Header
                    style={{
                      fontSize: "20px",
                      paddingTop: "5px",
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    Squats
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Chart2 uid={uid} exercise="squats" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="Tracker">
                <Card border="primary" style={{ width: "auto" }}>
                  <Card.Header
                    style={{
                      fontSize: "20px",
                      paddingTop: "5px",
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    Push Ups
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Chart2 uid={uid} exercise="push_ups" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="Tracker">
                <Card border="primary" style={{ width: "auto" }}>
                  <Card.Header
                    style={{
                      fontSize: "20px",
                      paddingTop: "5px",
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    Shoudler Press
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Chart2 uid={uid} exercise="shoulder_presses" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
