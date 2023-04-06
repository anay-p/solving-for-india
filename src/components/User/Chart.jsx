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
        backgroundColor: "#06CBF8",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: { color: "white", beginAtZero: true },
        grid: {
          color: "#393939",
        },
      },
      x: {
        ticks: { color: "white" },
        grid: {
          color: "#393939",
        },
      },
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

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};
