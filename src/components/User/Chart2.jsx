import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const Chart2 = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly activity",
        data: [20, 30, 40, 10, 50, 60, 70],
      },
    ],
  };
  return (
    <div>
      <Bar data={data}></Bar>
    </div>
  );
};
