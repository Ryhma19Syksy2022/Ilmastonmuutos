import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import Chart from "chart.js/auto";
import axios from "axios";
Chart.register(zoomPlugin);

const V1V2=()=> {
  const [globalAnnual, setGlobalAnnual] = useState([]);
  const [globalMonthly, setGlobalMonthly] = useState([]);
  const [northernAnnual, setNorthernAnnual] = useState([]);
  const [northernMonthly, setNorthernMonthly] = useState([]);
  const [southernAnnual, setSouthernAnnual] = useState([]);
  const [southernMonthly, setSouthernMonthly] = useState([]);
  const [v2, setV2] = useState([]);

  const getDatasetData = () => {
    let endpoints = [
      "/api/charts/v1-global-annual",
      "/api/charts/v1-global-monthly",
      "/api/charts/v1-northern-annual",
      "/api/charts/v1-northern-monthly",
      "/api/charts/v1-southern-annual",
      "/api/charts/v1-southern-monthly",
      "api/charts/v2"
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([
        { data: globalAnnual },
        { data: globalMonthly },
        { data: northernAnnual },
        { data: northernMonthly },
        { data: southernAnnual },
        { data: southernMonthly },
        {data: v2}
      ]) => {
        console.log({
          globalAnnual,
          globalMonthly,
          northernAnnual,
          northernMonthly,
          southernAnnual,
          southernMonthly,
        });
        setGlobalAnnual(globalAnnual);
        setGlobalMonthly(globalMonthly);
        setNorthernAnnual(northernAnnual);
        setNorthernMonthly(northernMonthly);
        setSouthernAnnual(southernAnnual);
        setSouthernMonthly(southernMonthly);
        setV2(v2)
      }
    );
  };

  useEffect(() => {
    getDatasetData();
  }, []);

  const dataAnnual = {
    datasets: [{
        label: "v2",
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(0,0,0)",
        fill: false,
        data: [...v2],
      },
      {
        label: "Global annual",
        backgroundColor: "rgb(249, 62, 110)",
        borderColor: "rgb(249, 62, 110)",
        fill: false,
        data: [...globalAnnual],
      },
      {
        label: "Northern annual",
        backgroundColor: "rgb(16, 131, 167)",
        borderColor: "rgb(16, 131, 167)",
        fill: false,
        data: [...northernAnnual],
      },
      {
        label: "Southern annual",
        backgroundColor: "rgb(247, 186, 8)",
        borderColor: "rgb(247, 186, 8)",
        fill: false,
        data: [...southernAnnual],
      }

    ],
  };

  const dataMonthly = {
    datasets: [{
      label: "v2",
      backgroundColor: "rgb(0,0,0)",
      borderColor: "rgb(0,0,0)",
      fill: false,
      data: [...v2],
    },
    {
      label: "Global monthly",
      backgroundColor: "rgb(249, 62, 110)",
      borderColor: "rgb(249, 62, 110)",
      fill: false,
      data: [...globalMonthly],
    },
    {
      label: "Northern monthly",
      backgroundColor: "rgb(16, 131, 167)",
      borderColor: "rgb(16, 131, 167)",
      fill: false,
      data: [...northernMonthly],
    },
    {
      label: "Southern monthly",
      backgroundColor: "rgb(247, 186, 8)",
      borderColor: "rgb(247, 186, 8)",
      fill: false,
      data: [...southernMonthly],
    }

  ],
  }

  const options = {
    parsing: {
      xAxisKey: "time",
      yAxisKey: "value",
    },
    tension: 0,
    type: "line",
    interaction: {
      mode: "index",
      intersect: false,
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    maintainAspectRatio: false,
    responsive: true,
    borderWidth: 1,
    fill: false,
    tension: 0,
    type: "line",
    pointRadius: 0,
    scales: {
      y: {
        title: {
          display: true,
          align: "end",
          text: "deg c",
        },
      },
      x: {
        // type: "time",
        // time: {
        //   unit:"month"
        // }
      },
    },
    plugins: {
      legend: {
        labels: {
          boxHeight: 2,
          boxWidth: 10,
        },
      },
      // zoom: {
      //   limits: {
      //     x: { min: "original", max: "original" },
      //     y: { min: "original", max: "original" },
      //   },
      //   pan: {
      //     enabled: true,
      //     mode: "xy",
      //   },
      //   zoom: {
      //     wheel: {
      //       enabled: true,
      //     },
      //     mode: "xy",
      //     speed: 20,
      //   },
      // },
    },
  };

  const [graphState, updateState] = useState(true);

  function showAnnual() {
  updateState(true);
  }

  function showMonthly() {
  updateState(false);


  }
  return (
    <>
      <div>
      <button onClick={showAnnual}>Annual</button><button onClick={showMonthly}>Monthly</button>
      </div>
      <div>
      {graphState && <Line data={dataAnnual} options={options}></Line>}
      {!graphState && <Line data={dataMonthly} options={options}></Line>}
      {/* /* <Line data={dataMonthly} options={options}></Line> */}
        </div>
        </>
  );
}

export default V1V2;
