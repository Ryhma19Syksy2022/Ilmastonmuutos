import React, { useState, useEffect } from "react";
import { format, parse } from "date-fns";
import { Line } from "react-chartjs-2";
import axios from "axios";

const V1V2 = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [annualData, setAnnualData] = useState([]);
  const [v2, setV2] = useState([]);

  useEffect(() => {
    async function getV1V2Data() {
      const results = await axios.get("/api/charts/v1v2/all");
      setAnnualData(
        results.data.filter((a) => {
          return a.datasetId.includes("annual");
        })
      );
      setMonthlyData(
        results.data.filter((a) => {
          return a.datasetId.includes("monthly");
        })
      );
      setV2(
        results.data.filter((a) => {
          return a.datasetId.includes("v2");
        })
      );
    }
    getV1V2Data();
  }, []);

  const monthlyDataTimeFormatted = monthlyData.map((t) =>
    format(parse(t.time, "yyyy-MM", new Date()), "MMM yyyy")
  );

   //deleting "old" time property
  const monthlyDataWithoutTime = monthlyData.map(({ time, ...rest }) => {
    return rest;
  });

  //reconstructing monthly data
  const newMonthlyData = monthlyDataTimeFormatted.map((time, index) => {
    return {
      ...monthlyDataWithoutTime[index],
      time: time,
    };
  });

  const globalMonthly = newMonthlyData.filter(
    (obj) => obj.datasetId === "v1-global-monthly"
  );
  const northernMonthly = newMonthlyData.filter(
    (obj) => obj.datasetId === "v1-northern-monthly"
  );
  const southernMonthly = newMonthlyData.filter(
    (obj) => obj.datasetId === "v1-southern-monthly"
  );

  const globalAnnual = annualData.filter(
    (obj) => obj.datasetId === "v1-global-annual"
  );
  const northernAnnual = annualData.filter(
    (obj) => obj.datasetId === "v1-northern-annual"
  );
  const southernAnnual = annualData.filter(
    (obj) => obj.datasetId === "v1-southern-annual"
  );

  const dataAnnual = {
    datasets: [
      {
        label: "2,000-Year Northern Hemisphere Temperature Reconstruction",
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(0,0,0)",
        fill: false,
        data: v2,
      },
      {
        label: "Global annual",
        backgroundColor: "rgb(249, 62, 110)",
        borderColor: "rgb(249, 62, 110)",
        fill: false,
        data: globalAnnual,
      },
      {
        label: "Northern annual",
        backgroundColor: "rgb(16, 131, 167)",
        borderColor: "rgb(16, 131, 167)",
        fill: false,
        data: northernAnnual,
      },
      {
        label: "Southern annual",
        backgroundColor: "rgb(247, 186, 8)",
        borderColor: "rgb(247, 186, 8)",
        fill: false,
        data: southernAnnual,
      },
    ],
  };

  const dataMonthly = {
    datasets: [
      {
        label: "Global monthly",
        backgroundColor: "rgb(249, 62, 110)",
        borderColor: "rgb(249, 62, 110)",
        fill: false,
        data: globalMonthly,
      },
      {
        label: "Northern monthly",
        backgroundColor: "rgb(16, 131, 167)",
        borderColor: "rgb(16, 131, 167)",
        fill: false,
        data: northernMonthly,
      },
      {
        label: "Southern monthly",
        backgroundColor: "rgb(247, 186, 8)",
        borderColor: "rgb(247, 186, 8)",
        fill: false,
        data: southernMonthly,
      },
    ],
  };

  const options = {
    parsing: {
      xAxisKey: "time",
      yAxisKey: "value",
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
          text: "temperature (ºC)",
        },
      },
      x: {
        title: {
          display: true,
          align: "end",
          text: "time",
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
        <button onClick={showAnnual}>Annual</button>
        <button onClick={showMonthly}>Monthly</button>
      </div>
      <div style={{ width: "auto", height: "500px" }}>
        {graphState && <Line data={dataAnnual} options={options}></Line>}
        {!graphState && (
          <Line data={dataMonthly} options={options}></Line>
        )}
      </div>
      <hr />
      <div>
        <p>
          Temperatures from January 1850 onwards as global and regional average
          time series.
        </p>
        <p>
          Northern Hemisphere temperature reconstruction for the past 2,000
          years by combining low-resolution proxies with tree-ring data, using a
          wavelet transform technique to achieve timescale-dependent processing
          of the data.
        </p>
      </div>
      <div>
        <p>Links:</p>
        <p>
          <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">
            2,000-Year Northern Hemisphere Temperature Reconstruction{" "}
          </a>
        </p>
        <p>
          <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">
            Global historical surface temperature anomalies from January 1850
            onwards
          </a>
        </p>
        <p>
          <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">
            Data measurement description
          </a>
        </p>
      </div>
    </>
  );
};

export default V1V2;
