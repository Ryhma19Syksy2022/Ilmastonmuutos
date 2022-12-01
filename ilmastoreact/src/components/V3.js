import { React, useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import axios from "axios";
import "chart.js/auto";


const V3 = () => {
    const chartRef = useRef(null);
    const [annualData, setannualData] = useState([]);
    const [dssData, setdssData] = useState([]);
    const [de08Data, setde08Data] = useState([]);
    const [de082Data, setde082Data] = useState([]);
    const [monthlyData, setmonthlyData] = useState([]);
    const [v10Data, setV10Data] = useState([]);

    useEffect(() => {
        axios.get("/api/charts/v3").then((response) => {
            setannualData(response.data.filter((a) => { return a.datasetId === "v3-annual" }));
            setdssData(response.data.filter((a) => { return a.datasetId === "v4-DSS" }));
            setde08Data(response.data.filter((a) => { return a.datasetId === "v4-DE08" }));
            setde082Data(response.data.filter((a) => { return a.datasetId === "v4-DE08-2" }));
            setmonthlyData(response.data.filter((a) => { return a.datasetId === "v3-monthly" }));
        });
    }, []);

    useEffect(() => {
        axios.get("/api/charts/v10").then((response) => {
            setV10Data(response.data);
        });
    }, []);

    const chart = chartRef.current;

    function findValueAt(x) {
        let year = 2022 - x.time;
        let data = chart.data.datasets[0].data;
        let index = data.findIndex(o => o.time >= year);
        if (index === -1) {
            data = chart.data.datasets[1].data;
            index = data.findIndex(o => o.time >= year);
            if (index === -1) {
                data = chart.data.datasets[2].data;
                index = data.findIndex(o => o.time >= year);
                if (index === -1) {
                    data = chart.data.datasets[3].data;
                    index = data.findIndex(o => o.time >= year);
                }
            }
        }
        let prev = data[index - 1];
        let next = data[index];
        if (prev && next) {
            let slope = (next.value - prev.value) / (next.time - prev.time);
            return { value: prev.value + (year - prev.time) * slope, time: String(year), description: x.description };
        }
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: "V3 Mauna Loa measurements combined with V4 ice core measurements",
            },
        },
        datasets: {
            line: {
                pointRadius: 0,
                pointHitRadius: 3,
            }
        },
        parsing: {
            xAxisKey: "time",
            yAxisKey: "value"
        },
        scales: {
            xAxis: {
                type: 'time',
                time: {
                    unit: 'month'
                },
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            yAxis: {
                title: {
                    display: true,
                    text: 'CO2 ppm'
                }
            }
        }
    }

    const data = {
        datasets: [
            {
                label: "DSS Ice core CO2",
                backgroundColor: "rgb(22, 112, 22)",
                borderColor: "rgb(22, 112, 22)",
                borderWidth: 2,
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "line",
                data: dssData
            },
            {
                label: "DE08 Ice core CO2",
                backgroundColor: "rgb(128, 48, 3)",
                borderColor: "rgb(128, 48, 3)",
                borderWidth: 2,
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "line",
                data: de08Data
            },
            {
                label: "DE08-2 Ice core CO2",
                backgroundColor: "rgb(52, 64, 235)",
                borderColor: "rgb(52, 64, 235)",
                borderWidth: 2,
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "line",
                data: de082Data
            },
            {
                label: "Mauna Loa Annual CO2 concentration",
                backgroundColor: "rgb(249, 62, 110)",
                borderColor: "rgb(249, 62, 110)",
                borderWidth: 2,
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "line",
                data: annualData
            },
            {
                label: "V10",
                pointRadius: 6,
                backgroundColor: "red",
                borderColor: "black",
                type: "line",
                showLine: false,
                pointHitRadius: 8,
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.raw.description
                            return label
                        }
                    },
                },
                data: v10Data.map((a) => findValueAt(a)).filter(a => { return a !== undefined })
            },
            {
                label: "Mauna Loa Monthly CO2 concentration",
                backgroundColor: "rgb(74, 21, 35)",
                borderColor: "rgb(74, 21, 35)",
                borderWidth: 2,
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "line",
                data: monthlyData,
            },
        ]

    }

    return (
    <>
    <Line ref={chartRef} options={options} data={data} />
    <hr />
    <div>
        <p>
            The graph shows CO2 measured in the atmosphere at the Hawaii Mauna Loa Observatory, combined with the CO2 records from the three ice cores obtained at Law Dome, East Antarctica.
        </p>
        <p>
            The red dots are major human evolution and culture events with most of them being related to CO2 and temperatures.
        </p>
        <p>Links:</p>
        <p>
          <a href="https://gml.noaa.gov/ccgg/trends/data.html">
            V3 data source
          </a>
        </p>
        <p>
          <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">
            V3 data measurement description
          </a>
        </p>
        <p>
          <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">
            V4 data source
          </a>
        </p>
        <p>
          <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">
            V4 data measurement description
          </a>
        </p>
        <p>
          <a href="https://www.southampton.ac.uk/~cpd/history.html">
            V10 data source
          </a>
        </p>
    </div>
    </>);
};
export default V3;  