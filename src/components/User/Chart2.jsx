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
