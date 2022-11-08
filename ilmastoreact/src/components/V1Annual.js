import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";

const V1Annual = () => {
  const [annualData, setannualData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1annual")
      .then((response) => {
        setannualData(response.data);
      console.log(response.data)})
      .catch((error) => {
        //status(500).send(error.message)
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          labels: annualData.map((a) => a.time),
          datasets: [
            {
              label: "Global Anomaly (deg c)",
              backgroundColor: "rgb(249, 62, 110)",
              borderColor: "rgb(249, 62, 110)",
              borderWidth: 2,
              hoverBorderColor: "yellow",
              hoverBorderWidth: 2,
              fill: false,
              tension: 0,
              type: "line",
              data: annualData.map((a) => a.globalAnomaly),
            },
            {
              label: "Global Lower confidence limit (2.5%)",
              backgroundColor: "rgb(249, 62, 110, 0.2)",
              borderColor: "transparent",
              pointRadius: 0,
              fill: 0,
              tension: 0,
              data: annualData.map((a) => a.globalLcl),
            },
            {
              label: "Global Upper confidence limit (97.5%)",
              backgroundColor: "rgb(249, 62, 110, 0.2)",
              borderColor: "transparent",
              pointRadius: 0,
              fill: 0,
              tension: 0,
              data: annualData.map((a) => a.globalUcl),
            },
            {
              label: "Northern Anomaly (deg c)",
              backgroundColor: "rgb(16, 131, 167)",
              borderColor: "rgb(16, 131, 167)",
              borderWidth: 2,
              fill: false,
              tension: 0,
              type: "line",
              data: annualData.map((a) => a.northernAnomaly),
            },
            {
              label: "Northern Lower confidence limit (2.5%)",
              backgroundColor: "rgb(16, 131, 167, 0.2)",
              borderColor: "transparent",
              pointRadius: 0,
              fill: 0,
              tension: 0,
              data: annualData.map((a) => a.northernLcl),
            },
            {
              label: "Northern Upper confidence limit (97.5%)",
              backgroundColor: "rgb(16, 131, 167, 0.2)",
              borderColor: "transparent",
              pointRadius: 0,
              fill: 0,
              tension: 0,
              data: annualData.map((a) => a.northernUcl),
            },
            {
              label: "Southern Anomaly (deg c)",
              backgroundColor: "rgb(247, 186, 8)",
              borderColor: "rgb(247, 186, 8)",
              borderWidth: 2,
              fill: false,
              tension: 0,
              type: "line",
              data: annualData.map((a) => a.southernAnomaly),
            },
            {
              label: "Southern Lower confidence limit (2.5%)",
              backgroundColor: "rgb(247, 186, 8, 0.2)",
              borderColor: "transparent",
              pointRadius: 0,
              fill: 0,
              tension: 0,
              data: annualData.map((a) => a.southernLcl),
            },
            {
              label: "Southern Upper confidence limit (97.5%)",
              backgroundColor: "rgb(247, 186, 8, 0.2)",
              borderColor: "transparent",
              pointRadius: 0,
              fill: 0,
              tension: 0,
              data: annualData.map((a) => a.southernUcl),
            },
          ],
        }}
      />
    </div>
  );
};
export default V1Annual;
