import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const V7 = () => {
  const [v7, setV7] = useState([]);
  const [v10, setV10] = useState([]);

  useEffect(() => {
    async function getV7Data() {
      const results = await axios.get("/api/charts/v7/all");
      setV7(results.data);
    }
    getV7Data();
  }, []);

  useEffect(() => {
    async function getV10Data() {
      const results = await axios.get("/api/charts/v7/v10");
      setV10(results.data);
    }
    getV10Data();
  }, []);

  const v7labels = v7.map((t) => parseInt(t.time));

  const newV7Labels = v7labels.map((time) => 1950 - 1000 * time);

  //deleting "old" time property
  const v7WithoutTime = v7.map(({ time, ...rest }) => {
    return rest;
  });

  //reconstructing v7 data
  const newV7 = newV7Labels.map((time, index) => {
    return {
      ...v7WithoutTime[index],
      time: time,
    };
  });

  const co2 = newV7.filter((obj) => {
    return obj.datasetId === "v7-co2";
  });

  const temp = newV7.filter((obj) => {
    return obj.datasetId === "v7-GAST";
  });

  const v10Labels = v10.map((t) => t.time);

  const newV10Labels = v10Labels.map((time) => 2022 - time);

  //adding value property
  const v10WithValue = v10.map((element) => ({ ...element, value: 3 }));

  //deleting "old" time property
  const v10WithoutTime = v10WithValue.map(({ time, ...rest }) => {
    return rest;
  });

  //reconstructing v10 data
  const newV10 = newV10Labels.map((time, index) => {
    return {
      ...v10WithoutTime[index],
      time: time,
    };
  });

  const data = {
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
        pointStyle: "line",
        data: co2,
        yAxisID: "y",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
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
        pointStyle: "line",
        data: temp,
        yAxisID: "y1",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
      },
      {
        label: "history",
        backgroundColor: "rgb(156, 39, 176)",
        borderColor: "rgb(0, 0, 0)",
        fill: false,
        borderWidth: 1,
        pointRadius: 5,
        pointStyle: "circle",
        type: "scatter",
        data: newV10,
        yAxisID: "y1",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.raw.description;
              return label;
            },
          },
        },
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        max: 400,
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
        type: "linear",
        max: 2022,
        title: {
          display: true,
          align: "end",
          text: "Time",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
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
      <div style={{ width: "auto", height: "650px" }}>
        <Line data={data} options={options} />
      </div>
      <hr style={{ width: "auto" }} />
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
          <a href="http://carolynsnyder.com/publications.php">Data source</a>{" "}
          (Evolution of global temperature over the past two million years →
          Source Data for Figures)
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
