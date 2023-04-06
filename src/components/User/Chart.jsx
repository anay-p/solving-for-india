import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const Chartx = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly activity",
        data: [80, 78, 76, 72, 70, 69, 70],
      },
    ],
  };
  return (
    <div>
      <Bar data={data}></Bar>
    </div>
  );
};
