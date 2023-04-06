import React from "react";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import Button from "react-bootstrap/Button";

import { Chart2 } from "./Chart2";
import { Chartx } from "./Chart";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
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
      borderWidth: 0.5,
    },
  ],
};

const Dashboard = () => {
  return (
    <div class="main">
      <div className="headdash">
        <div className="overview">
          <Card border="danger" style={{ width: "18rem", height: "22rem" }}>
            <Card.Header>Overview</Card.Header>
            <Card.Body>
              <Card.Text>
                <Doughnut data={data} />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="activity">
          <Card border="danger" style={{ width: "21rem", height: "22rem" }}>
            <Card.Header>Today's Activity</Card.Header>
            <Card.Body className="dashbody">
              <Card.Title></Card.Title>
              <Card.Text>
                <Button className="sets" variant="primary">
                  <h5>1.2 Hr</h5>
                  <p>Per Day</p>
                  <p>Gym</p>
                </Button>
              </Card.Text>
              <Card.Text>
                <Button className="sets" variant="danger">
                  <h5>5230</h5>
                  <p>Sets/Week</p>
                  <p>Quads</p>
                </Button>
                <Button className="sets" variant="success">
                  <h5>1.4 Hr</h5>
                  <p>Per Day</p>
                  <p>Cardio</p>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="workouts">
          <Card border="danger" style={{ width: "18rem", height: "22rem" }}>
            <Card.Header>Recommended Activity</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <div className="recc">
                  <h5>Squats</h5>
                  <p>15 sets</p>
                </div>
                <div className="recc">
                  <h5>Pushups</h5>
                  <p>15 sets</p>
                </div>
                <div className="recc">
                  <h5>Pullups</h5>
                  <p>15 sets</p>
                </div>
                <div className="recc">
                  <h5>Crunches</h5>
                  <p>15 sets</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="Tracker">
        <Card border="primary" style={{ width: "40%" }}>
          <Card.Header>Activity Tracker</Card.Header>
          <Card.Body>
            {/* <Card.Title>Primary Card Title</Card.Title> */}
            <Card.Text>
              <Chart2 />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: "40%" }}>
          <Card.Header>Weight Gain/Loss</Card.Header>
          <Card.Body>
            {/* <Card.Title>Primary Card Title</Card.Title> */}
            <Card.Text>
              <Chartx />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
