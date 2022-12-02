import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const V7 = () => {
  const [v7, setV7] = useState([]);

  useEffect(() => {
    async function getV7Data() {
      const results = await axios.get("/api/charts/v7/all");
      setV7(results.data);
    }
    getV7Data();
  }, []);

  const labels = v7.map((t) => parseInt(t.time));
  const filtered = [...new Set(labels)];

  const co2 = v7.filter((obj) => {
    return obj.datasetId === "v7-co2";
  });

  const temp = v7.filter((obj) => {
    return obj.datasetId === "v7-GAST";
  });

  const data = {
    labels: filtered,
    datasets: [
      {
        label: "co2",
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(0,0,0)",
        fill: false,
        borderWidth: 1,
        tension: 0,
        type: "line",
        pointRadius: 0,
        data: co2.map((data) => data.value),
        yAxisID: "y",
      },
      {
        label: "surface temperature change",
        backgroundColor: "rgb(243, 0, 0)",
        borderColor: "rgb(243, 0, 0)",
        fill: false,
        borderWidth: 2,
        tension: 0,
        type: "line",
        pointRadius: 0,
        data: temp.map((data) => data.value),
        yAxisID: "y1",
      },
    ],
  };

  console.log(filtered);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          align: "end",
          text: "co2 (ppm)",
        },
        position: "left",
      },
      y1: {
        title: {
          display: true,
          align: "end",
          text: "global average surface temperature (ºC)",
        },
        position: "right",
      },
      x: {
        title: {
          display: true,
          align: "end",
          text: "Time (ka)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          boxHeight: 2,
          boxWidth: 10,
        },
      },
      title: {
        display: true,
        text: "Evolution of global temperature over the past two million years",
      },
    },
  };

  return (
    <>
      <div style={{ width: "auto", height: "500px" }}>
        <Line data={data} options={options} />
      </div>
      <hr style={{ width: "1000px" }} />
      <div>
        <p>
          The temperature record from the available 2m year period in
          combination with the available co2 measurements from the 800k year
          period.
        </p>
      </div>
      <div>
        <p>Links:</p>
        <p>
          <a href="http://carolynsnyder.com/publications.php">Data source</a> (Evolution of global temperature over the past two million years → Source Data for Figures)
        </p>
        <p>
          <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">
            Description
          </a>
        </p>
      </div>
    </>
  );
};

export default V7;