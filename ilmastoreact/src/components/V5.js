import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import axios from "axios";
import "chart.js/auto";


const V5 = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios
        .get("/api/charts/v5")
        .then((response) => {
            setChartData(response.data);
            console.log(response.data)
        });
    }, []);

    const options = {
        plugins: {
            title: {
                display: true,
                text: "V5 Vostok Ice Core CO2 measurements",
            },
        },
        datasets: {
            line: {
                pointRadius: 0,
                pointHitRadius: 8,
            },
        },
        parsing: {
            xAxisKey: "time",
            yAxisKey: "value"
        },
        scales: {
            xAxis: {
                ype: 'time',
                time: {
                    unit: 'year'
                },
                reverse: true,
                title: {
                    display: true,
                    text: 'Years before present',
                },
            },
            yAxis: {
                title: {
                    display: false,
                }
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20
            }
        }
    }

    const data = {
        datasets: [
            {
                label: "CO2 concentration",
                backgroundColor: "rgb(249, 62, 110)",
                borderColor: "rgb(249, 62, 110)",
                borderWidth: 2,
                hoverBorderColor: "yellow",
                hoverBorderWidth: 2,
                fill: false,
                tension: 0,
                type: "line",
                data: chartData
            }
        ]
    }

    return ( <Line options={options} data={data} /> )
};
export default V5;