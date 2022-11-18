import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Chart from "chart.js";

const V6 = () => {
  const [v6, setV6] = useState([]);

  useEffect(() => {
    async function getV6Data() {
      const results = await axios.get("/api/charts/v6");
      setV6(results.data);
      console.log(results.data);
    }
    getV6Data();
  }, []);

  const data = {
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
        data: [...v6].reverse(),
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
              }

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
                text: 'Antarctic Ice Cores Revised 800KYr CO2 Data'
            },
        }
    }

  return (
    <div style={{ width: "1000px"  ,height:"500px"}}>
      <Line data={data} options={options} />
    </div>
  );
};

export default V6;
