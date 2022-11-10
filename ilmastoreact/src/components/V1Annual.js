import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chart.js/auto";
import axios from "axios";
Chart.register(zoomPlugin);

const V1Annual = () => {
  const [annualData, setAnnualData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/charts/v1")
      .then((response) => {
        setAnnualData(response.data);
      console.log(response.data)})
      .catch((error) => {
        //status(500).send(error.message)
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          labels: annualData.slice(0,172).map((a) => a.time),
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
              data: annualData.map((a) => a.globalAnnual),
            },
             {
              label: "Northern Anomaly (deg c)",
              backgroundColor: "rgb(16, 131, 167)",
              borderColor: "rgb(16, 131, 167)",
              borderWidth: 2,
              fill: false,
              tension: 0,
              type: "line",
              data: annualData.map((a) => a.northernAnnual),
            },
            {
              label: "Southern Anomaly (deg c)",
              backgroundColor: "rgb(247, 186, 8)",
              borderColor: "rgb(247, 186, 8)",
              borderWidth: 2,
              fill: false,
              tension: 0,
              type: "line",
              data: annualData.map((a) => a.southernAnnual),
            }
          ],
        }}
        options={{
          pointRadius:0,
          plugins: {
            zoom: {
              limits: {
                x: { min: "original", max: "original" },
                y: { min: "original", max: "original" },
              },
              pan: {
                enabled: true,
                mode: "xy",
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                mode: "xy",
                speed: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};
export default V1Annual;
