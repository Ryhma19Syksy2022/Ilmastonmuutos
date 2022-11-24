import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";

const V8 = () => {
    const [countries, setCountries] = useState([]);
    const []=useState([]);


useEffect(()=> {
    async function getCountries(){
        const results = await axios.get("/api/v8")
        console.log(results.data);
        setCountries(results.data);
    }
    getCountries();
},[]);

const country = {
    labels: countries.map((c) => c.time),
    datasets:[{
        label: "Afghanistan",
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(0,0,0)",
        fill: false,
        type: "line",
        data: countries.map((c) => c.afghanistan)
    },
    {
        label: "Albania",
        backgroundColor: "rgb(5,88,111)",
        borderColor: "rgb(5,88,111)",
        fill: false,
        type: "line",
        data: countries.map((c) => c.albania)
    }
]
}

const options = {
    interaction: {
        mode: "index",
        intersect: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    
}

return(
    <>
        <div>
            <Line data={country} options={options}></Line>
        </div>
    </>
)
}
export default V8;