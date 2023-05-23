import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const Chart2 = (props) => {
  function format(date) {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6);
    return day + "/" + month + "/" + year;
  }

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Daily activity",
        data: [],
        backgroundColor: "#06CBF8",
      },
    ],
  });

  useEffect(() => {
    getDoc(doc(db, "exercise_data", props.uid))
    .then((docSnap) => {
      const userx = docSnap.data();
      var entries = Object.entries(userx);
      entries.sort((a, b) => Number(a[0]) - Number(b[0]));

      var tempData = {
        labels: [],
        datasets: [
          {
            label: "Daily activity",
            data: [],
            backgroundColor: "#06CBF8",
          },
        ],
      };

      for (var idx in entries) {
        tempData.labels.push(format(entries[idx][0]));
        tempData.datasets[0].data.push(entries[idx][1][props.exercise]);
      }
      setData(tempData);
    });
  }, []);

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
    // I have added the width style because I don't know how to change the size of the chart propertly -Anay
    <div style={{width:"40vw"}}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};
