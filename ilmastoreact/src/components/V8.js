import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";

const V8 = () => {
  const [v8, setV8] = useState([]);

  useEffect(() => {
    async function getV8Data() {
      const results = await axios.get("/api/charts/v8");
      setV8(results.data);
    }
    getV8Data();
  }, []);

  const labels = v8.map((t) => parseInt(t.time));
  const filtered = [...new Set(labels)];

  const data = Object.entries(
    v8.reduce((acc, { country, value }) => {
      if (!acc[country]) {
        acc[country] = [];
      }
      acc[country].push(value);
      return acc;
    }, {})
  ).map(([country, data]) => ({ country, data }));

  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  const datasets = [];
  data.forEach((entry) => {
    const dataset = {
      label: entry.country,
      data: entry.data,
      borderColor: randomRGB,
      backgroundColor: randomRGB,
      borderWidth: 3,
      fill: "false", // fills the space below each line
      pointRadius: 0,
    };
    datasets.push(dataset);
  });

  const dataObj = {
    labels: filtered,
    datasets: datasets,
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    // interaction: {
    //   mode: "index",
    //   intersect: false,
    // },
    scales: {
        y: {
          title: {
            display: true,
            align: "end",
            text: "million tonnes of CO2",
          }
        },
        x: {
          title: {
            display: true,
            align: "end",
            text: "year",
          },
        },
      },
    plugins: {
        legend: {
          position: 'top',
        labels: {
          boxHeight: 2,
          boxWidth: 10,
        },
        },
        title: {
            display: true,
            text: "CO2 emissions by country",
          }
    },
  };

  return (
    <>
      <div style={{ width: "auto", height: "1000px" }}>
        <Line data={dataObj} options={options}></Line>
          </div>
          <hr style={{ width: "1000px" }} />
      <div>
        <p>
        CO<sub>2</sub> emissions of each country 1959-2020.</p>
      </div>
      <div>
        <p>Links:</p>
        <p>
          <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Data source</a> (2021 National Emissions v1.0)
        </p>
        <p>
          <a href="https://essd.copernicus.org/articles/14/1917/2022">
            Description
          </a>
              </p>
              </div>
    </>
  );
};
export default V8;
