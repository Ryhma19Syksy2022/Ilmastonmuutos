import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";


const V5 = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios
        .get("/api/charts/v5")
        .then((response) => {
            setChartData(response.data);
            console.log(response.data)})
            .catch((error) => {
            //status(500).send(error.message)
        });
    }, []);

    function testButton(event, array) {
        if (array[0]) {
            console.log("test")
        }
    }

    return (
        <div>
            <Line
                options={{
                    onClick: testButton,
                    scales: {
                        xAxis: {
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
                }}
                data={{
                    labels: chartData.map((a) => a.time),
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
                            data: chartData.map((a) => a.value),
                        }
                    ]
                }}
            />
        </div>
    )
};
export default V5;