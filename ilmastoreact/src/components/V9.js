import { React, useState, useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';
import axios from "axios";
import "chart.js/auto";

const V9 =() => {
const [sectorData,setsectorData] = useState([]);
const [graphState,updateState] = useState(true);

useEffect(() => {
    async function getSectors(){
     const results = await axios.get("/api/v9sectors")
     console.log(results);
     console.log(results.data);
     setsectorData(results.data)
    }
    getSectors();
},[])

const sectorsData = {
    labels: sectorData.slice(0,4).map((c) => c.sectors),
    datasets: [
      {
        label: "sectors",
        backgroundColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
        borderColor: ["rgb(50, 62, 110)","rgb(100,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
        borderWidth: 2,
        hoverBorderColor: "yellow",
        hoverBorderWidth: 2,
        fill: false,
        tension: 0,
        type: "doughnut",
        radius: '40%',
        borderAlign: 'inner',
        data: sectorData.slice(0,4).map((c) => c.co2),
      },
    ]
}

const subSectorsData = {
    labels: sectorData.slice(5,21).map((c) => c.subSectors),
    datasets:[
        {
            label: "subSectors",
            backgroundColor: ["rgb(50, 62, 110)","rgb(10,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
            borderColor: ["rgb(50, 62, 110)","rgb(100,50,200)","rgb(12,150,0)","rgb(144,5,256)"],
            borderWidth: 2,
            hoverBorderColor: "yellow",
            hoverBorderWidth:2,
            fill: false,
            tension: 0,
            type: "doughnut",
            radius: '40%',
            borderAlign: 'inner',
            data: sectorData.slice(5,21).map((c) => c.co2),
    }]
}

function showSector(event, array) {
    if(array[0]){
        updateState(true);
    }
}
            
function showSubSector(event,array) {
    if(array[0]){
        updateState(false);
    }
} 

return (
  <>
  <div>
    {graphState && <Doughnut data={sectorsData} options={{onClick:showSubSector}}></Doughnut>}
    {!graphState && <Doughnut data={subSectorsData} options={{onClick:showSector}}></Doughnut>}
  </div>
  </>
  );
  }
  export default V9;

