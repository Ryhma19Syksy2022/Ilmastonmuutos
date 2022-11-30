import { React, useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import axios from "axios";
import "chart.js/auto";


const V3 = () => {
    const [annualData, setannualData] = useState([]);
    const [v10Data, setV10Data] = useState([]);

    useEffect(() => {
        axios.get("/api/charts/v3").then((response) => {
            setannualData(response.data);
            console.log(response.data)
        });
    }, []);

    useEffect(() => {
        axios.get("/api/charts/v10").then((response) => {
            setV10Data(response.data);
            console.log(response.data)
        });
    }, []);

    const chartRef = useRef(null);

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
                data: annualData.filter((a) => { return a.datasetId === "v4-DSS" })
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
                data: annualData.filter((a) => { return a.datasetId === "v4-DE08" })
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
                data: annualData.filter((a) => { return a.datasetId === "v4-DE08-2" })
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
                data: annualData.filter((a) => { return a.datasetId === "v3-annual" })
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
                data: annualData.filter((a) => { return a.datasetId === "v3-monthly" }),
            },
        ]

    }

    return (<Line ref={chartRef} options={options} data={data} />);
};
export default V3;