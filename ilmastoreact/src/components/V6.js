import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const V6 = () => {
  const [v6, setV6] = useState([]);

  useEffect(() => {
    async function getV6Data() {
      const results = await axios.get("/api/charts/v6");
      setV6(results.data);
    }
    getV6Data();
  }, []);

  let roundYear = v6.map((data) => Math.round(parseFloat(data.time))).reverse();
  let fixedYear = roundYear.map((value) => (value - 1950) * -1);

  const data = {
    labels: fixedYear,
    datasets: [
      {
        label: "Composite CO2 record",
        backgroundColor: "rgb(16, 131, 167)",
        borderColor: "rgb(16, 131, 167)",
        fill: false,
        borderWidth: 1,
        tension: 0,
        type: "line",
        pointRadius: 0,
        data: v6.map((data) => data.value).reverse(),
      },
    ],
  };

  const options = {
    // parsing: {
    //     xAxisKey: "time",
    //     yAxisKey: "value",
    // },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          align: "end",
          text: "co2 (ppm)",
        },
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
        labels: {
          boxHeight: 2,
          boxWidth: 10,
        },
      },
      title: {
        display: true,
        text: "Antarctic Ice Cores Revised 800KYr CO2 Data",
      },
    },
  };

  return (
    <>
      <div style={{ width: "auto", height: "500px" }}>
        <Line data={data} options={options} />
      </div>
      <hr />
      <div>
        <p>Atmospheric CO2 concentrations for the last 800,000 years.</p>
        <p>Earliest Year: 805669 cal yr BP (-803719 CE) </p>
        <p>Most Recent Year: -51 cal yr BP (2001 CE)</p>
      </div>
      <div>
        <p>Links:</p>
        <p>
          <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">
            Data source
          </a>
        </p>
        <p>
          <a href="http://ncdc.noaa.gov/paleo/study/17975">Description</a>
        </p>
      </div>
    </>
  );
};

export default V6;