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
        },
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

    return ( 
    <>
    <Line data={data} options={options} />
    <hr />
    <div>
            <p>
                The graph shows the CO2 measured from the Vostok ice core
            </p>
            <p>Links:</p>
            <p>
                <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">
                    V5 data source
                </a>
            </p>
            <p>
                <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">
                    V5 data measurement description
                </a>
            </p>
        </div>
        </>)
};
export default V5;