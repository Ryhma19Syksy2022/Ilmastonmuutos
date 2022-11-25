import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";


const V3 = () => {
    const [annualData, setannualData] = useState([]);
    const [yearData, setYears] = useState([]);
    useEffect(() => {
        axios
        .get("/api/charts/v3/1")
        .then((response) => {
            setannualData(response.data);
            setYears(getYears(response.data[0].time, response.data[response.data.length - 1].time))
            console.log(response.data)})
        .catch((error) => {
            //status(500).send(error.message)
        });
        }, []);
    
    const [monthlyData, setmonthlyData] = useState([]);
    useEffect(() => {
        axios
        .get("/api/charts/v3/2")
        .then((response) => {
            setmonthlyData(response.data);
        console.log(response.data)})
        .catch((error) => {
            //status(500).send(error.message)
        });
        }, []);

        const [graphState, updateState] = useState(true);

    function showAnnual() {
    updateState(true);
    }

    function showMonthly() {
    updateState(false);
    }
    
    function getYears(startYear, endYear) {
    const years = [];
    for (var i = startYear; i <= endYear; i++) {
        years.push(String(i));
        }
    return years;
    }

    return (
        <>{graphState && <div>V3 annual Mauna Loa measurements combined with V4 ice core measurements</div>}{!graphState && <div>V3 monthly Mauna Loa measurements</div>}<button onClick={showAnnual}>Annual</button><button onClick={showMonthly}>Monthly</button><div>
            {graphState && <Line
                options={{
                    datasets: {
                        line: {
                            pointRadius: 0,
                            pointHitRadius: 8,
                        }
                    },
                     parsing: {
                         xAxisKey: "time",
                         yAxisKey: "value"
                    },
                    scales: {
                        xAxis: {
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
                }}
                data={{
                    labels: yearData,
                    datasets: [
                        {
                            label: "DSS Ice core CO2",
                            backgroundColor: "rgb(22, 112, 22)",
                            borderColor: "rgb(22, 112, 22)",
                            borderWidth: 2,
                            hoverBorderColor: "yellow",
                            hoverBorderWidth: 2,
                            fill: false,
                            tension: 0,
                            type: "line",
                            data: annualData.filter((a) => {return a.dataset_id === "v4-DSS"}),
                        },
                        {
                            label: "DE08 Ice core CO2",
                            backgroundColor: "rgb(128, 48, 3)",
                            borderColor: "rgb(128, 48, 3)",
                            borderWidth: 2,
                            hoverBorderColor: "yellow",
                            hoverBorderWidth: 2,
                            fill: false,
                            tension: 0,
                            type: "line",
                            data: annualData.filter((a) => {return a.dataset_id === "v4-DE08"}),
                        },
                         {
                            label: "DE08-2 Ice core CO2",
                            backgroundColor: "rgb(52, 64, 235)",
                            borderColor: "rgb(52, 64, 235)",
                            borderWidth: 2,
                            hoverBorderColor: "yellow",
                            hoverBorderWidth: 2,
                            fill: false,
                            tension: 0,
                            type: "line",
                            data: annualData.filter((a) => {return a.dataset_id === "v4-DE08-2"}),
                        },
                        {
                            label: "Mauna Loa CO2 concentration",
                            backgroundColor: "rgb(249, 62, 110)",
                            borderColor: "rgb(249, 62, 110)",
                            borderWidth: 2,
                            hoverBorderColor: "yellow",
                            hoverBorderWidth: 2,
                            fill: false,
                            tension: 0,
                            type: "line",
                            data: annualData.filter((a) => {return a.dataset_id === "v3-annual"}),
                        },
                    ]
                }} />}
                {!graphState && <Line
                options={{
                    datasets: {
                        line: {
                            pointRadius: 0,
                            pointHitRadius: 8,
                        }
                    },
                    scales: {
                        xAxis: {
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
                }}
                data={{
                    labels: monthlyData.map((a) => a.time),
                    datasets: [
                        {
                            label: "Mauna Loa CO2 concentration",
                            backgroundColor: "rgb(249, 62, 110)",
                            borderColor: "rgb(249, 62, 110)",
                            borderWidth: 2,
                            hoverBorderColor: "yellow",
                            hoverBorderWidth: 2,
                            fill: false,
                            tension: 0,
                            type: "line",
                            data: monthlyData.map((a) => a.value)
                        },
                    ]
                }} />}
        </div></>
    );
};
export default V3;